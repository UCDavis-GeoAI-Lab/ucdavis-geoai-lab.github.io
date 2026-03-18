# ABT182 Final Sample Questions with Answers

---

## Multiple Choice Questions

### Question 1
**Which resolution is more important for creating a topography map?**

A. Temporal resolution  
B. Radiometric resolution  
C. Spectral resolution  
D. Spatial resolution

**Answer:** D) Spatial resolution

---

### Question 2
**How many dimensions does an RGB image feature space have?**

A. 1  
B. 2  
C. 3  
D. 4

**Answer:** C) 3

---

### Question 3
**You used an unsupervised learning algorithm to cluster the training data into three clusters. Once you developed your model, you are given a test sample. To which cluster do you assign this test sample?**

A. C1  
B. C2  
C. C3  
D. None of the clusters

**Answer:** B) C2 (the cluster whose centroid is nearest to the test sample)

---

### Question 4
**For a supervised land cover identification, what type of machine learning technique will you implement?**

A. Classification  
B. Regression  
C. Clustering  
D. Association

**Answer:** A) Classification

---

### Question 5
**In a network with 3 input nodes, 2 hidden nodes, and 2 output nodes, how many weights do we have that should be identified?**

A. 3  
B. 6  
C. 7  
D. 12

**Answer:** D) 12

---

### Question 6
**A reasonable performance on both training and test datasets is described as:**

A. Underfitting  
B. Overfitting  
C. Optimum  
D. Bias

**Answer:** C) Optimum

---

### Question 7
**In k-fold Cross Validation, the test data changes k times.**

A. True  
B. False

**Answer:** A) True

---

### Question 8
**Which parameter is NOT considered a hyperparameter in training a deep learning network?**

A. Number of hidden layers  
B. Number of nodes (neurons) in each hidden layer  
C. Selecting the activation function (e.g., sigmoid or ReLU)  
D. Weights for each layer

**Answer:** D) Weights for each layer (these are learned parameters)

---

### Question 9
**If we calculate the 'median' using zonal statistics (gray cell: no data), what would be the value for zone 1?**

A. 0  
B. 1  
C. 2  
D. 3

**Answer:** B) 1

---

### Question 10
**A company approached you to help them identify dry spots in a large forest with a high risk of fire using satellite data. If you don't have ground-truth data (labels), which machine learning algorithm do you use?**

A. Random forest  
B. Neural network  
C. K-means  
D. Linear regression

**Answer:** C) K-means

---

### Question 11
**Which statement is true about zonal statistics?**

A. Zonal raster (zonal extent) must be a raster file.  
B. Zonal raster and value raster must have the same spatial resolution.  
C. Value raster must be a raster file.  
D. The output of zonal statistics is always a raster.

**Answer:** C) Value raster must be a raster file.

---

### Question 12
**A dataset in which you calculate a statistic must be \_\_\_\_\_\_\_\_\_\_ .**

A. Raster  
B. Vector  
C. Standalone table  
D. All of the above

**Answer:** A) Raster

---

### Question 13
**You are tasked to use satellite imagery to identify the soil type and soil moisture content in a large field. What type of machine learning algorithm do you use for these two applications?**

A. Classification, Classification  
B. Classification, Regression  
C. Regression, Classification  
D. Regression, Regression

**Answer:** B) Classification, Regression

---

### Question 14
**What is the Turing test?**

A. It's a test of a machine's ability to exhibit intelligent behavior.  
B. It's a test to judge human intelligence in an automated way.  
C. It's a test of the speed of a machine in rendering text datasets.  
D. It's a test to judge the processing power and speed of a machine.

**Answer:** A) It's a test of a machine's ability to exhibit intelligent behavior.

---

### Question 15
**If our machine learning algorithm predicts a continuous quantity, then it's a \_\_\_\_\_\_\_\_\_\_ .**

A. Classification problem  
B. Regression problem  
C. Clustering problem  
D. Association problem

**Answer:** B) Regression problem

---

### Question 16
**Which of the following is NOT a Python IDE?**

A. PyCharm  
B. Jupyter  
C. Visual Studio Code  
D. ArcGIS Pro

**Answer:** D) ArcGIS Pro (it is a GIS application with Python support, not primarily an IDE)

---

### Question 17
**In what classifier is the objective to find a model that maximizes the margin between the samples of classes?**

A. SVM  
B. Random Forest  
C. Decision Trees  
D. K-means

**Answer:** A) SVM

---

### Question 18
**Which Python library is commonly used for performing zonal statistics on raster data?**

A. pandas  
B. scipy  
C. rasterstats  
D. rasterio

**Answer:** C) rasterstats

---

### Question 19
**Given an NDVI histogram with a bimodal distribution, what would be a reasonable threshold to segment vegetation pixels?**

A. 0.2  
B. 1.0  
C. 0.5  
D. 0.1

**Answer:** C) 0.5 (typically at the valley between the two modes)

---

### Question 20
**Which of the following techniques is commonly used for image segmentation based on pixel intensity?**

A. Principal Component Analysis (PCA)  
B. K-means clustering  
C. Linear regression  
D. Decision tree classification

**Answer:** B) K-means clustering

---

### Question 21
**What does CNN stand for in the context of deep learning?**

A. Convolutional Neural Network  
B. Convolutional Number Network  
C. Complex Neural Network  
D. Concurrent Neural Network

**Answer:** A) Convolutional Neural Network

---

### Question 22
**What does the Zonal Statistics tool in ArcGIS Pro calculate?**

A. Only the area of zones  
B. The mean, median, sum, minimum, and maximum of cell values within zones  
C. Only the perimeter of zones  
D. None of the above

**Answer:** B) The mean, median, sum, minimum, and maximum of cell values within zones

---

### Question 23
**Which of the following is an example of supervised learning in GIS?**

A. Clustering land cover types without labels  
B. Classifying satellite images into land cover categories with known labels  
C. Reducing the dimensionality of hyperspectral images  
D. Discovering patterns in spatial data without specific outcomes

**Answer:** B) Classifying satellite images into land cover categories with known labels

---

### Question 24
**K-means clustering is an example of:**

A. Supervised learning  
B. Unsupervised learning  
C. Reinforcement learning  
D. Semi-supervised learning

**Answer:** B) Unsupervised learning

---

## Short Answer Questions

### Question 1
**What are the benefits of ArcGIS Python integration?**

- Automation of repetitive GIS tasks
- Custom tool development
- Integration with other Python libraries
- Scripting for batch processing
- Extending ArcGIS functionality

---

### Question 2
**What is spatial, spectral, temporal, and radiometric resolution?**

- **Spatial:** Size of the smallest object that can be detected
- **Spectral:** Number and width of wavelength bands
- **Temporal:** How often the sensor revisits the same area
- **Radiometric:** Ability to distinguish different levels of brightness

---

### Question 3
**What is the difference between True color and False color composite?**

- **True color:** Uses red, green, blue bands to display images as they would appear to the human eye
- **False color:** Uses different band combinations (e.g., NIR, red, green) to highlight features not visible in true color

---

### Question 4
**Write 2 vegetation indices that are commonly used and their formula.**

- **NDVI:** (NIR - Red) / (NIR + Red)
- **NDRE:** (NIR - Red Edge) / (NIR + Red Edge)
- **EVI:** 2.5 * (NIR - Red) / (NIR + 6*Red - 7.5*Blue + 1)

---

### Question 5
**Give 2 examples of supervised classification.**

- Maximum Likelihood Classification
- Support Vector Machine (SVM)
- Random Forest
- Decision Tree Classification
- Minimum Distance to Means

---

### Question 6
**Given a 3 x 3 NDRE matrix, create a binary mask where any NDRE value less than 0.5 is set to 0, and any value 0.5 or higher is set to 1. What would be the final output matrix after applying this mask element-wise to the original NDRE values?**

NDRE Values:
0.3 0.5 0.2
0.6 0.1 0.8
0.4 0.7 0.2

Binary Mask: 0 1 0 / 1 0 1 / 0 1 0

Final output: 0 0.5 0 / 0.6 0 0.8 / 0 0.7 0

---

### Question 7
**Which Python library is commonly used for: Zonal statistics, Reading raster data, Reading vector data, Machine learning, Using ArcGIS Pro tools in Python?**

- Zonal statistics: rasterstats
- Reading raster data: rasterio
- Reading vector data: geopandas, fiona
- Machine learning: scikit-learn
- ArcGIS Pro tools: arcpy

---

### Question 8
**What is the main difference between multispectral and hyperspectral imaging?**

- **Multispectral:** Few broad bands (e.g., 4-10 bands)
- **Hyperspectral:** Many narrow contiguous bands (e.g., hundreds of bands), providing detailed spectral information

---

### Question 9
**List one of the many benefits of using ArcGIS Notebooks.**

- Integrated Python environment within ArcGIS
- Access to ArcPy and spatial analysis tools
- Jupyter-style interactive coding
- Easy sharing and collaboration
- Pre-configured with GIS libraries

---

### Question 10
**What is an Integrated Development Environment (IDE)?**

An IDE is a software application that provides comprehensive facilities for program development, typically including a source code editor, build automation, debugging tools, and sometimes version control integration.

---

### Question 11
**How does supervised learning differ from unsupervised learning?**

- **Supervised learning:** Uses labeled training data; the algorithm learns from input-output pairs to make predictions
- **Unsupervised learning:** Uses unlabeled data; the algorithm discovers patterns and structure in the data without predefined outcomes

---

## Summary

- **Total Questions:** 35 (24 Multiple Choice + 11 Short Answer)
- **Topics Covered:** Remote sensing, resolution types, machine learning (classification, regression, clustering), neural networks, zonal statistics, ArcPy, Python GIS libraries, vegetation indices, NDVI/NDRE, CNN, SVM
