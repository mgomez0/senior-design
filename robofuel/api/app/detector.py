import subprocess

def object_detection():

    #Open the Virtual Enviroment
    #subprocess.call("source bin/activate", cwd="/home/box/Desktop/TrainYourOwnYOLO", shell=True)

    #Saving Video Frame as image file
    subprocess.call("./rs-save-to-disk", cwd="/home/box/Desktop/TrainYourOwnYOLO/Data/Source_Images/Test_Images", shell=True)

    subprocess.call("rm rs-save-to-disk-output-Depth*", cwd="/home/box/Desktop/TrainYourOwnYOLO/Data/Source_Images/Test_Images", shell=True)

    #Run the Image through Object
    subprocess.call("python Detector.py", cwd="/home/box/Desktop/TrainYourOwnYOLO/3_Inference", shell=True)

    #Calculate Coordinates
    subprocess.call("python coords.py", cwd="/home/box/Desktop/calc_coords", shell=True)

    #Empty the test images folder
    subprocess.call("rm rs-save-to-disk-output-*", cwd="/home/box/Desktop/TrainYourOwnYOLO/Data/Source_Images/Test_Images", shell=True)

    subprocess.call("rm rs-save-to-disk-output-*", cwd="/home/box/Desktop/TrainYourOwnYOLO/Data/Source_Images/Test_Image_Detection_Results", shell=True)


