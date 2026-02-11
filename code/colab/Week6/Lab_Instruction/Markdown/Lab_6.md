This week, we will explore Python programming for geospatial analysis in ArcGIS Pro. We will complete a course developed by Esri, called [*Python for Everyone*](https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/).

This course is offered by Esri Academy along with several other courses. You can explore and search the courses grouped by topic here: <https://www.esri.com/training/catalog/search/>.

## Learning goals

- **Automate** geoprocessing tasks.

- **Correct** common scripting errors.

- **Choose** the Python scripting environment that meets your needs.

- **Apply** Python syntax rules when writing scripts.

## Software

To complete exercises, you need the following:

- ArcGIS Pro 3.5 (Basic, Standard, or Advanced) installed on the lab's computers.

## How do I get ArcGIS Pro?

- If you would like to use your own computer, you can download and install ArcGIS Pro 3.5 (or 3.6) on your machine. To learn how to download and install the software, please check this website:

<https://kb.ucdavis.edu/?id=3340>

- Alternatively, you can remotely login to the CAES virtual computer lab, which is available 24x7, and use ArcGIS Pro. To learn how to connect to the CAER Virtual Computer Lab, please check this website:

<https://kb.ucdavis.edu/?id=6888>

## Steps to accomplish the lab

**NOTE**: Please carefully read the following steps as some of them are different from ESRI's instructions.

**NOTE**: Please answer the following questions in the notebook.

1.  Find the course here:

<https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/>

Or alternatively, by searching "*[Python for Everyone"]{.underline}* in the search box. Put quotation marks around the course name to narrow down the search results. Click on the course name to enter the course page.

2.  Step 2. Sign in to the course.

![A screenshot of a computer Description automatically generated](media/image1.png)

- You need to sign in with our organization's URL, so please type 'ucdavis' (ucdavis.maps.arcgis.com).

- Hit 'Continue'.

- Then, we should select UC DAVIS KERBEROS and continue through the normal ADFS login process (click on Kerberos Login).

![UC Davis Kerberos login](media/image4.png)

- Once you launch the course, you will see a page like this:\
  ![A screenshot of a computer Description automatically generated](media/image6.png)

3.  Once you read the introduction and download the data, start the course (bottom right corner).

4.  We encourage you to read all the subsections of "Foundations of Python". You may skip the quiz.

5.  Please read all the subsections of "Python script environments" that introduce scripting environments for writing Python code.

6.  You may skip the first two sections of "Creating scripts" (i.e., creating scripts and data types), as we are already familiar with Python syntax and data types (lists, tuples, dictionaries, etc.).

7.  Please complete the Exercise (Create data types) with the following instructions:

    a.  We encourage you to complete all the steps 1-7, but please read the following instructions first. However, if you feel comfortable, you may skip this exercise and jump to Q1 (below).

    b.  The ESRI instruction (**5. Concatenate variables and 6. Index and slice variables**) asks you to write the code in the Python window in ArcGIS Pro, but we need to write our code in the **notebook** in ArcGIS Pro (please feel free to test writing code in the Python window).

**Q1**. Write a code that split \`park\` string into a list of strings containing the name of the file and its extension" \[\'Parks_sd520\', \'shp\'\]

Example: <https://www.w3schools.com/python/ref_string_split.asp>

Instructions for Q1.

a.  Open a new notebook: *Insert \> New Notebook*

b.  Rename the notebook*: Catalog \> right-click on the notebook \> rename it to* "Questions.ipynb".

c.  You will then submit the notebook.

d.  Add a heading: Question 1

e.  Add a code cell below and write your code there.

f.  Check the screenshot below.

![ArcGIS Pro notebook example](media/image7.png)

8.  Once you are done with the exercise, please move on to the following sections (Statements, Functions). You may skim over these sections to refresh your skills.

9.  Follow the instructions in Exercise 2 (Create a script).

**Q2**. In section 5. Create a text file and write a code that adds your name as the author at the beginning of the text file. So, the text in the file should be like this:

*Author: Ali Moghimi \[change it to your name\]*

*Parks_SD.shp*

*Schools_SD.shp*

*Sewer_Main_SD.shp*

Instructions for Q2:

a.  In your Questions.ipynb notebook, add another heading: Question 2 (similar to the screenshot above).

b.  Add a code cell below and write your code there to save the save a text file with the requested information.

<!-- -->

10. Continue the course and move forward to section 4. Python in ArcGIS Pro. Please complete the exercise: Use Python in a GIS workflow in ArcGIS Pro.

11. You may stop here. No need to continue with the next section: Handling errors.

What to submit:

- Submit all the notebooks as \*.ipynb files, SanDiegoShapefiles.ipynb and Questions.ipynb.

- Submit the map layout as a PDF file from EXERCISE Use Python in a GIS workflow in ArcGIS Pro

<https://geospatialtraining.com/exporting-vector-pdf-maps-in-arcgis-pro/>

- You may zip all the files before submitting them.

![A map of the state of mississippi Description automatically generated](media/image8.png)
