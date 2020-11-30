//change all 100's to 1000000000 to increase resolution
//

//useful digits are in terms of percent or mm
//Resolution of percent -> 1 unit = 0.001%
//Resolution of distance -> 1 micrometer



// update motors every 100ms 
module pid_control(clock, setpoint, feedback, control, k_p, k_i, k_d);
	input clock;
	input signed [31:0] setpoint; //signed integer setpoint of where linear actuator goes in micrometers
	input signed [31:0] feedback; //signed integer feedback of where linear actuator is at in micrometers
	output signed [31:0] control; //signed integer commanded linear actuator velocity in millipercent (needs to be converted to percent when sent to motor controller)
	
	wire signed [31:0] s; //internal setpoint signal
	wire signed [31:0] x; //internal feedback signal
	
	
	reg signed [31:0] e_t [0:3];	//error between setpoint and feedback
	reg signed [31:0] i_e_t;	//integral of error
	reg signed [31:0] d_e_t;	//derivative of error
	reg signed [31:0] u_t = 0;	//internal control output
	reg signed [31:0] e_t_bounded = 0;	//error term bounded between 100% & -100%
	reg signed [31:0] i_e_t_bounded = 0; //integral error term bounded between 100% & -100%
	reg signed [31:0] u_t_bounded = 0; //internal control output bounded between 100% & -100%
		
	input signed [31:0] k_p;	// proportional gain
	input signed [31:0] k_i; // integral gain
	input signed [31:0] k_d; // derivative gain
	
	parameter percent_upper_bound = 100000; //= 100.000%
	parameter percent_lower_bound = -100000; //= -100.000%
	
	reg integral_reset = 1; //clears error integral value when 0, resets when setpoint is reached or crossed
		
	assign s = setpoint;
	assign x = feedback;
	assign control = u_t_bounded;
	
	//checks if the setpoint has been reached or crossed
	always@(*)
	begin
		if(e_t[0] == 0) integral_reset <= 0;
		else if(e_t[0] > 0 && e_t[1] <= 0) integral_reset <= 0;
		else if(e_t[0] < 0 && e_t[1] >= 0) integral_reset <= 0;
		else integral_reset <= 1;
	end
	
	always@(*)
	begin
		if(e_t[0] >= percent_upper_bound) e_t_bounded = percent_upper_bound;
		else if(e_t[0] <= percent_lower_bound) e_t_bounded = percent_lower_bound;
		else e_t_bounded = e_t[0];
	end
	
	always@(*)
	begin
		if(i_e_t >= percent_upper_bound) i_e_t_bounded = percent_upper_bound;
		else if(i_e_t <= percent_lower_bound) i_e_t_bounded = percent_lower_bound;
		else i_e_t_bounded = i_e_t;
	end
	
	always@(*)
	begin
		if(u_t >= percent_upper_bound) u_t_bounded = percent_upper_bound;
		else if(u_t <= percent_lower_bound) u_t_bounded = percent_lower_bound;
		else u_t_bounded = u_t;
	end
	
	initial
	begin
		e_t[0] <= 0;
		e_t[1] <= 0;
		e_t[2] <= 0;
		e_t[3] <= 0;
		i_e_t <= 0;
		d_e_t <= 0;
	end
	
	always@(posedge clock)
	begin
		e_t[0] <= s - x;
		e_t[1] <= e_t[0];
		e_t[2] <= e_t[1];
		e_t[3] <= e_t[2];
	end
	
	always@(posedge clock)
	begin
		i_e_t <= (i_e_t * integral_reset) + e_t_bounded;
		d_e_t <= e_t[0] - e_t[1];
		u_t <= (k_p * e_t[0]) + (k_i * i_e_t_bounded) + (k_d * d_e_t);
	end 
endmodule 

module pid_control_tb();
	integer i,j,k;
	integer reset_test = 1; // used to reset values such as feedback for repetitive tests
	reg clock;
	reg signed [31:0] setpoint;
	reg signed [31:0] feedback;
	wire signed [31:0] control;
	reg signed [31:0] timer;
	wire signed [31:0] error;
	wire signed [31:0] velocity;
	reg [31:0] k_p;
	reg [31:0] k_i;
	reg [31:0] k_d;
	pid_control uut(clock, setpoint, feedback, control, k_p, k_i, k_d);
	
	assign error = uut.e_t[0];
	assign velocity = control*0.051;
	initial
	begin
		clock = 0;
		setpoint = 0;
		feedback = 0;
		timer = 0;
	end
	
	always
	begin
		#50 //clock period is 100, consider this 100ms for servo update rate
		clock <= ~clock;
	end
	
	always
	begin
		#3
		timer <= timer + 1;
		//actuator lower saturation limit is about 12% when it stops moving
		//max speed of actuator is 17mm / s -> 
		if(control < 13000 && control > -13000)//motor saturation region of 13% > x > -13%
		begin
			feedback <= feedback * reset_test;
		end
		else
		begin
			feedback <= (feedback * reset_test) + (control*51);//accounts for converting millipercent to percent and multiplying by max actuator speed in micrometers over 3ms 
		end
	end
	initial
	begin
		for(i = 0; i < 100000; i = i + 1000)//increments k_p by 1 percent
		begin
			for(j = 0; j < 100000; j = j + 1000)//increments k_i by 1 percent
			begin
				for(k = 0; k < 100000; k = k + 1000)//increments k_d by 1 percent
				begin
					k_p = 0;
					k_i = 0;
					k_d = 0;
					setpoint = 0;
					reset_test = 0;
					#200
					k_p = i;
					k_i = j;
					k_d = k;
					setpoint = 900000; //initiating setpoint of 900mm
					reset_test = 1;
					#55000 //53s = ideal time to reach 900mm setpoint
					
					if(setpoint == feedback || (error < 1000 && error > -1000))
					begin
						$display("%d,%d,%d \n",k_p,k_i,k_d);
					end
					#10;
				end
			end
		end
		$stop;
	end
endmodule 