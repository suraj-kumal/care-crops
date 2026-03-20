# CCLDSS - Crop Crop Leaf Disease Detection & Support System

## 📋 Project Overview

**CCLDSS** is an intelligent crop disease detection system that uses deep learning to classify crop leaf diseases. The system supports the detection and classification of diseases for three major crops:

- **Corn** (4 classes)
- **Tomato** (10 classes)
- **Rice** (9 classes)

The application provides both a REST API (FastAPI) and a web interface for real-time disease classification from leaf images.

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Web Application Layer                      │
│          (HTML, CSS, JavaScript - Static Files)              │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                   FastAPI Backend                             │
│  - Image Upload Handling                                     │
│  - Disease Classification Endpoints                          │
│  - Model Loading & Inference                                │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│         Multiple Pre-Trained Deep Learning Models             │
│      (5 Architecture Types × 3 Crops = 15 Models)           │
│                                                              │
│  Architecture 1: AlexNet (Custom CNN)                        │
│  Architecture 2: CustomCNN (Lightweight)                     │
│  Architecture 3: ResNet50 (Transfer Learning)               │
│  Architecture 4: DenseNet121 (Transfer Learning)            │
│  Architecture 5: VGG16 (Transfer Learning)                  │
│                                                              │
│  Each with crop variants: Corn, Tomato, Rice               │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                Image Processing Pipeline                      │
│  - Image Resizing (224×224 or 256×256)                     │
│  - Normalization (0-1 range)                               │
│  - Batch Processing                                         │
└──────────────────────────────────────────────────────────────┘
```

### Technology Stack

| Component                   | Technology                   |
| --------------------------- | ---------------------------- |
| **Backend Framework**       | FastAPI                      |
| **Deep Learning Framework** | TensorFlow/Keras             |
| **Frontend**                | HTML5, CSS3, JavaScript      |
| **Image Processing**        | PIL (Python Imaging Library) |
| **Metrics & Evaluation**    | scikit-learn                 |
| **Server**                  | Uvicorn                      |

---

## 🧠 Model Architectures

The CCLDSS system implements **5 different CNN architectures** across all 3 crops, providing comparative analysis and flexibility for different use cases:

### 1. AlexNet-Based Architecture

The baseline deep learning model inspired by the original AlexNet

#### Layer Configuration

```
Input Layer:
  └─ Resizing → 256×256 pixels
  └─ Rescaling → Normalize to [0, 1]

Convolutional Block 1:
  ├─ Conv2D: 96 filters, 11×11 kernel, stride=4, padding=valid, ReLU
  └─ MaxPool2D: 3×3 pool, stride=2

Convolutional Block 2:
  ├─ Conv2D: 256 filters, 5×5 kernel, stride=1, padding=same, ReLU
  └─ MaxPool2D: 3×3 pool, stride=2

Convolutional Blocks 3-5:
  ├─ Conv2D: 384 filters, 3×3 kernel, stride=1, padding=same, ReLU
  ├─ Conv2D: 384 filters, 3×3 kernel, stride=1, padding=same, ReLU
  ├─ Conv2D: 256 filters, 3×3 kernel, stride=2, padding=same, ReLU
  └─ MaxPool2D: 3×3 pool, stride=2

Fully Connected Layers:
  ├─ Flatten Layer
  ├─ Dense: 2304 units, ReLU activation
  ├─ Dropout: 0.5
  ├─ Dense: 4096 units, ReLU activation
  ├─ Dropout: 0.5
  ├─ Dense: 4096 units, ReLU activation
  ├─ Dense: 1000 units, ReLU activation
  └─ Dense: n_classes units, Softmax activation (output layer)

Output Layer:
  └─ Softmax: Returns probability distribution across disease classes
```

**Key Parameters:**

- Input Size: 256×256×3 (RGB)
- Total Trainable Layers: 8
- Approach: Original CNN design with manual feature extraction

---

### 2. Custom CNN Architecture

A lightweight custom Convolutional Neural Network optimized for crop disease detection

#### Layer Configuration

```
Input Layer:
  └─ Resizing → 256×256 pixels
  └─ Rescaling → Normalize to [0, 1]

Convolutional Blocks (6 blocks):
  Block 1:
    ├─ Conv2D: 32 filters, 3×3 kernel, ReLU, padding=valid
    ├─ BatchNormalization
    └─ MaxPooling2D: 2×2

  Blocks 2-6:
    ├─ Conv2D: 64 filters, 3×3 kernel, ReLU, padding=valid
    ├─ BatchNormalization
    └─ MaxPooling2D: 2×2
    (repeated 5 times)

Classification Layers:
  ├─ Flatten Layer
  ├─ Dense: 64 units, ReLU activation
  ├─ Dropout: 0.5
  └─ Dense: n_classes units, Softmax activation (output layer)
```

**Key Parameters:**

- Input Size: 256×256×3 (RGB)
- Total Trainable Layers: 12
- Batch Normalization: Applied after each Conv2D
- Approach: Lightweight with batch normalization for improved convergence

---

### 3. ResNet50 Architecture

Transfer learning using pre-trained ResNet50 from ImageNet

#### Layer Configuration

```
Input Layer:
  └─ Rescaling: 1/255 normalization

Pre-trained Base Model:
  ├─ ResNet50 (weights='imagenet', include_top=False)
  ├─ Input Shape: 224×224×3 (RGB)
  ├─ Frozen layers: All base model weights frozen (non-trainable)
  └─ Output: Feature maps from base model

Global Average Pooling:
  └─ GlobalAveragePooling2D: Reduces spatial dimensions

Fully Connected Layers:
  ├─ Dense: 512 units, ReLU activation
  ├─ Dropout: 0.5
  ├─ Dense: 256 units, ReLU activation
  ├─ Dropout: 0.3
  └─ Dense: n_classes units, Softmax activation (output layer)

Output Layer:
  └─ Softmax: Returns probability distribution across disease classes
```

**Key Parameters:**

- Input Size: 224×224×3 (RGB)
- Pre-trained Weights: ImageNet
- Base Model Layers: 50 residual blocks
- Training Strategy: Transfer learning (feature extraction)
- Approach: Deep residual network with skip connections

---

### 4. DenseNet121 Architecture

Transfer learning using DenseNet121 with dense connections between layers

#### Layer Configuration

```
Input Layer:
  └─ Rescaling: 1/255 normalization

Pre-trained Base Model:
  ├─ DenseNet121 (weights='imagenet', include_top=False)
  ├─ Input Shape: 224×224×3 (RGB)
  ├─ Frozen layers: All base model weights frozen (non-trainable)
  ├─ Dense Blocks: 4 dense blocks with dense connections
  └─ Output: Feature maps from base model

Global Average Pooling:
  └─ GlobalAveragePooling2D: Reduces spatial dimensions

Fully Connected Layers:
  ├─ Dense: 512 units, ReLU activation
  ├─ Dropout: 0.5
  ├─ Dense: 256 units, ReLU activation
  ├─ Dropout: 0.3
  └─ Dense: n_classes units, Softmax activation (output layer)

Output Layer:
  └─ Softmax: Returns probability distribution across disease classes
```

**Key Parameters:**

- Input Size: 224×224×3 (RGB)
- Pre-trained Weights: ImageNet
- Base Model Layers: 121 convolutional layers
- Dense Connections: Each layer receives input from all previous layers
- Training Strategy: Transfer learning (feature extraction)
- Approach: Densely connected network for improved gradient flow

---

### 5. VGG16 Architecture

Transfer learning using VGG16 with sequential convolutional blocks

#### Layer Configuration

```
Input Layer:
  └─ Rescaling: 1/255 normalization

Pre-trained Base Model:
  ├─ VGG16 (weights='imagenet', include_top=False)
  ├─ Input Shape: 224×224×3 (RGB)
  ├─ Frozen layers: All base model weights frozen (non-trainable)
  ├─ Convolutional Blocks: 5 blocks of sequential convolutions
  │  ├─ Blocks 1-2: 2 Conv2D layers + MaxPool2D
  │  ├─ Blocks 3-5: 3 Conv2D layers + MaxPool2D
  │  └─ Filter progression: 64 → 128 → 256 → 512 → 512
  └─ Output: Feature maps from base model

Pooling & Flattening:
  ├─ GlobalAveragePooling2D: Reduces spatial dimensions
  └─ (or Flatten depending on dataset size)

Fully Connected Layers:
  ├─ Dense: 512 units, ReLU activation
  ├─ Dropout: 0.5
  ├─ Dense: 256 units, ReLU activation
  ├─ Dropout: 0.3
  └─ Dense: n_classes units, Softmax activation (output layer)

Output Layer:
  └─ Softmax: Returns probability distribution across disease classes
```

**Key Parameters:**

- Input Size: 224×224×3 (RGB)
- Pre-trained Weights: ImageNet
- Base Model Layers: 16 convolutional layers + 3 fully connected layers
- Architecture Style: Sequential stacking of conv blocks
- Training Strategy: Transfer learning (feature extraction)
- Approach: Deep classical CNN architecture with simple, uniform design

---

## 📋 Common Training Parameters

All five architectures share the following common hyperparameters and training configurations:

#### Optimizer & Loss Configuration

| Parameter         | Value                           |
| ----------------- | ------------------------------- |
| **Optimizer**     | Adam (learning rate: 0.0001)    |
| **Loss Function** | Sparse Categorical Crossentropy |
| **Metrics**       | Accuracy                        |
| **Max Epochs**    | 50 (with early stopping)        |

#### Learning Rate Schedule

| Strategy     | ReduceLROnPlateau |
| ------------ | ----------------- |
| **Monitor**  | Validation Loss   |
| **Factor**   | 0.3               |
| **Patience** | 2-4 epochs        |
| **Verbose**  | Yes               |

#### Early Stopping

| Strategy     | EarlyStopping   |
| ------------ | --------------- |
| **Monitor**  | Validation Loss |
| **Patience** | 5-20 epochs     |
| **Verbose**  | Yes             |

#### Data Augmentation

Applied to training data to improve generalization and prevent overfitting:

```
├─ RandomFlip (horizontal and vertical)
├─ RandomRotation (0.2 radians)
├─ RandomZoom (0.2)
├─ RandomTranslation (height/width factor: 0.2)
├─ RandomBrightness (factor: 0.2)
└─ RandomContrast (factor: 0.2)
```

#### Batch Sizes by Model

| Architecture    | Batch Size |
| --------------- | ---------- |
| **AlexNet**     | 16-32      |
| **CustomCNN**   | 16-32      |
| **ResNet50**    | 16-32      |
| **DenseNet121** | 16-32      |
| **VGG16**       | 8-32       |

---

## Architecture Comparison Table

| Feature            | AlexNet  | CustomCNN | ResNet50   | DenseNet121 | VGG16      |
| ------------------ | -------- | --------- | ---------- | ----------- | ---------- |
| **Input Size**     | 256×256  | 256×256   | 224×224    | 224×224     | 224×224    |
| **Conv Layers**    | 5        | 6         | 50         | 121         | 16         |
| **Type**           | Custom   | Custom    | Transfer   | Transfer    | Transfer   |
| **Depth**          | Shallow  | Shallow   | Very Deep  | Very Deep   | Deep       |
| **Parameters**     | ~60M     | ~0.5M     | ~25.6M     | ~7.9M       | ~14.7M     |
| **Training Speed** | Fast     | Very Fast | Moderate   | Moderate    | Moderate   |
| **Memory Usage**   | High     | Very Low  | Medium     | Medium      | Medium     |
| **Accuracy**       | High     | Good      | Very High  | Very High   | High       |
| **Use Case**       | Baseline | Mobile    | Production | Production  | Production |

**Legend:**

- Custom: Trained from scratch
- Transfer: Uses pre-trained ImageNet weights
- Parameters: Approximate total model parameters

---

## 📊 Dataset Information

### Dataset Structure

Each crop has its own dataset organized as follows:

```
dataset/
├── Class_1/
│   ├── image_1.jpg
│   ├── image_2.jpg
│   └── ...
├── Class_2/
│   ├── image_1.jpg
│   └── ...
└── Class_N/
    └── ...
```

### Dataset Split

| Split          | Percentage | Purpose               |
| -------------- | ---------- | --------------------- |
| **Training**   | 80%        | Model training        |
| **Validation** | 10%        | Hyperparameter tuning |
| **Testing**    | 10%        | Final evaluation      |

### Corn Dataset

| Class | Disease Name      |
| ----- | ----------------- |
| 0     | Healthy Corn Leaf |
| 1     | Leaf Blight       |
| 2     | Leaf Rust         |
| 3     | Leaf Spot         |

### Tomato Dataset

| Class | Disease Name                           |
| ----- | -------------------------------------- |
| 0     | Bacterial spot                         |
| 1     | Early blight                           |
| 2     | Late blight                            |
| 3     | Leaf Mold                              |
| 4     | Septoria leaf spot                     |
| 5     | Spider mites (Two spotted spider mite) |
| 6     | Target Spot                            |
| 7     | Yellow Leaf Curl Virus                 |
| 8     | Mosaic virus                           |
| 9     | Tomato healthy Leaf                    |

### Rice Dataset

| Class | Disease Name           |
| ----- | ---------------------- |
| 0     | Bacterial Leaf Blight  |
| 1     | Brown Spot             |
| 2     | Healthy Rice Leaf      |
| 3     | Leaf Blast             |
| 4     | Leaf Scald             |
| 5     | Narrow Brown Leaf Spot |
| 6     | Neck Blast             |
| 7     | Rice Hispa             |
| 8     | Sheath Blight          |

---

## 📈 Model Performance

### Evaluation Metrics

Each model is evaluated using the following metrics:

#### Accuracy

- **Test Accuracy**: Percentage of correctly classified samples on the test set
- Higher values indicate better overall model performance

#### Confusion Matrix

- Shows the distribution of predictions vs. actual labels
- Helps identify which classes are frequently misclassified
- Format: Rows = True labels, Columns = Predicted labels

#### F1 Score (Per-Class)

- **Formula**: $\text{F1} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$
- Balances precision and recall
- Macro-averaged F1: Average F1 score across all classes

#### Precision (Per-Class)

- **Formula**: $\text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}}$
- Proportion of positive predictions that were actually correct
- Indicates false positive rate

#### Recall (Per-Class)

- **Formula**: $\text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}}$
- Proportion of actual positives identified correctly
- Indicates false negative rate

#### Legend

- **TP** (True Positives): Correctly predicted disease cases
- **FP** (False Positives): Healthy samples incorrectly classified as diseased
- **FN** (False Negatives): Disease cases incorrectly classified as healthy

### Corn Model Metrics

| Metric                      | Value              |
| --------------------------- | ------------------ |
| **Test Accuracy**           | [See model output] |
| **Macro-averaged F1 Score** | [See model output] |

**Per-Class Performance**:
| Class | Precision | Recall | F1 Score |
|-------|-----------|--------|----------|
| Healthy_Leaf | [Value] | [Value] | [Value] |
| Leaf_Blight | [Value] | [Value] | [Value] |
| Leaf_Rust | [Value] | [Value] | [Value] |
| Leaf_Spot | [Value] | [Value] | [Value] |

**Confusion Matrix** (Corn):

```
                    Predicted
                   H    B    R    S
Actual  Healthy   [  ]  [ ]  [ ]  [ ]
        Blight    [ ]  [  ]  [ ]  [ ]
        Rust      [ ]  [ ]  [  ]  [ ]
        Spot      [ ]  [ ]  [ ]  [  ]
```

### Tomato Model Metrics

| Metric                      | Value              |
| --------------------------- | ------------------ |
| **Test Accuracy**           | [See model output] |
| **Macro-averaged F1 Score** | [See model output] |

**Per-Class Performance**:
| Class | Precision | Recall | F1 Score |
|-------|-----------|--------|----------|
| Bacterial_spot | [Value] | [Value] | [Value] |
| Early_blight | [Value] | [Value] | [Value] |
| Late_blight | [Value] | [Value] | [Value] |
| Leaf_Mold | [Value] | [Value] | [Value] |
| Septoria_leaf_spot | [Value] | [Value] | [Value] |
| Spider_mites | [Value] | [Value] | [Value] |
| Target_Spot | [Value] | [Value] | [Value] |
| Yellow_Leaf_Curl_Virus | [Value] | [Value] | [Value] |
| Mosaic_virus | [Value] | [Value] | [Value] |
| Tomato_healthy | [Value] | [Value] | [Value] |

**Confusion Matrix** (Tomato - 10×10):

```
                              Predicted (0-9)
Actual    [  ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
(0-9)     [ ]  [  ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
          ...
```

### Rice Model Metrics

| Metric                      | Value              |
| --------------------------- | ------------------ |
| **Test Accuracy**           | [See model output] |
| **Macro-averaged F1 Score** | [See model output] |

**Per-Class Performance**:
| Class | Precision | Recall | F1 Score |
|-------|-----------|--------|----------|
| Bacterial_Leaf_Blight | [Value] | [Value] | [Value] |
| Brown_Spot | [Value] | [Value] | [Value] |
| Healthy_Rice_Leaf | [Value] | [Value] | [Value] |
| Leaf_Blast | [Value] | [Value] | [Value] |
| Leaf_Scald | [Value] | [Value] | [Value] |
| Narrow_Brown_Leaf_Spot | [Value] | [Value] | [Value] |
| Neck_Blast | [Value] | [Value] | [Value] |
| Rice_Hispa | [Value] | [Value] | [Value] |
| Sheath_Blight | [Value] | [Value] | [Value] |

**Confusion Matrix** (Rice - 9×9):

```
                          Predicted (0-8)
Actual    [  ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
(0-8)     [ ]  [  ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
          ...
```

---

## 🌐 FastAPI Web Application

### Overview

The FastAPI backend provides a RESTful API for disease classification with the following capabilities:

- Model inference on user-uploaded leaf images
- Support for multiple crop types (Corn, Tomato, Rice)
- Real-time predictions with confidence scores
- Static file serving for web interface
- Error handling and validation

### Project Structure

```
care-crops/
├── main.py                              # FastAPI application
├── requirements.txt                     # Python dependencies
├── static/                              # Static assets
│   ├── Home.html                       # Landing page
│   ├── About.html                      # About page
│   ├── style.css                       # Main stylesheet
│   ├── ms.css                          # Additional styles
│   ├── app.js                          # Frontend JavaScript
│   └── site.webmanifest                # PWA manifest
├── model training/                      # Model training notebooks (15 files: 5 archs × 3 crops)
│   ├── Corn/
│   │   ├── alexnet_model.ipynb         # AlexNet training notebook
│   │   ├── customCNN.ipynb             # CustomCNN training notebook
│   │   ├── densenet121_model.ipynb     # DenseNet121 training notebook
│   │   ├── resnet50_model.ipynb        # ResNet50 training notebook
│   │   └── vgg16_model.ipynb           # VGG16 training notebook
│   ├── Tomato/
│   │   ├── alexnet_model.ipynb
│   │   ├── customCNN.ipynb
│   │   ├── densenet121_model.ipynb
│   │   ├── resnet50_model.ipynb
│   │   └── vgg16_model.ipynb
│   └── Rice/
│       ├── alexnet_model.ipynb
│       ├── customCNN.ipynb
│       ├── densenet121_model.ipynb
│       ├── resnet50_model.ipynb
│       └── vgg16_model.ipynb
├── Trained Models - Corn:
│   ├── corndisease_alexnetmodel.h5      # AlexNet (ACTIVE)
│   ├── corndisease_customCNN.h5         # CustomCNN
│   ├── corndisease_densenet121.h5       # DenseNet121
│   ├── corndisease_resnet50.h5          # ResNet50
│   └── corndisease_vgg16.h5             # VGG16
├── Trained Models - Tomato:
│   ├── tomatodisease_alexnetmodel.h5    # AlexNet
│   ├── tomatodisease_customCNN.h5       # CustomCNN
│   ├── tomatodisease_densenet121.h5     # DenseNet121
│   ├── tomatodisease_resnet50.h5        # ResNet50
│   └── tomatodisease_vgg16.h5           # VGG16
└── Trained Models - Rice:
    ├── ricedisease_alexnet.h5           # AlexNet
    ├── ricedisease_customCNN.h5         # CustomCNN
    ├── ricedisease_densenet121.h5       # DenseNet121
    ├── ricedisease_resnet50.h5          # ResNet50
    └── ricedisease_vgg16.h5             # VGG16
```

**Note:** Currently, the FastAPI application uses the **AlexNet models** (marked as ACTIVE). To use a different architecture, modify the paths in [main.py](main.py).

### API Endpoints

#### 1. **Root Endpoint**

```
GET /
```

**Description**: Returns the home page HTML

**Response**: HTML content of Home.html

**Status Codes**:

- `200 OK`: Successfully returned homepage
- `404 Not Found`: Home.html file not found
- `500 Internal Server Error`: Server error occurred

---

#### 2. **About Endpoint**

```
GET /about
```

**Description**: Returns the about page HTML

**Response**: HTML content of About.html

**Status Codes**:

- `200 OK`: Successfully returned about page

---

#### 3. **Classification Endpoint** (Main)

```
POST /classify
```

**Description**: Classifies a crop leaf image and returns the predicted disease

**Request Parameters**:

| Parameter    | Type   | Required | Description                            |
| ------------ | ------ | -------- | -------------------------------------- |
| `crop_name`  | string | Yes      | Crop type: "corn", "tomato", or "rice" |
| `crop_image` | file   | Yes      | Image file (JPEG, PNG, etc.)           |

**Request Example** (cURL):

```bash
curl -X POST "http://localhost:8000/classify" \
  -F "crop_name=corn" \
  -F "crop_image=@path/to/corn_leaf.jpg"
```

**Request Example** (Python):

```python
import requests

url = "http://localhost:8000/classify"
files = {'crop_image': open('corn_leaf.jpg', 'rb')}
data = {'crop_name': 'corn'}

response = requests.post(url, files=files, data=data)
print(response.json())
```

**Request Example** (JavaScript/Fetch):

```javascript
const formData = new FormData();
formData.append("crop_name", "corn");
formData.append("crop_image", imageFile);

fetch("/classify", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

**Response (Success - 200)**:

```json
{
  "message": "corn leaf image processed successfully",
  "crop_name": "corn",
  "predicted_class": "Leaf Blight",
  "confidence": 0.9487
}
```

**Response Fields**:

| Field             | Type   | Description                         |
| ----------------- | ------ | ----------------------------------- |
| `message`         | string | Processing status message           |
| `crop_name`       | string | The crop type that was classified   |
| `predicted_class` | string | Name of the predicted disease class |
| `confidence`      | float  | Confidence score (0.0 to 1.0)       |

**Response (Error - 400/500)**:

```json
{
  "error": "Unsupported crop type"
}
```

or

```json
{
  "error": "An error occurred: [error details]"
}
```

---

### Image Processing Pipeline

The classification endpoint performs the following steps:

1. **Image Loading**:
   - Receives image file from POST request
   - Opens image using PIL (Python Imaging Library)

2. **Crop-Specific Preprocessing**:

   ```
   Corn Images:
   └─ Resize to 224×224 pixels

   Tomato Images:
   └─ Resize to 256×256 pixels

   Rice Images:
   └─ Resize to 256×256 pixels
   ```

3. **Array Conversion**:
   - Convert image to NumPy array
   - Add batch dimension (expand to shape [1, H, W, 3])

4. **Model Inference**:
   - Pass processed image through appropriate model
   - Obtain prediction probabilities

5. **Post-Processing**:
   - Find maximum probability (argmax)
   - Map index to class name
   - Return prediction and confidence

---

### Model Loading Configuration

**Loaded Models** (on application startup):

```python
# Corn Model
corn_model_path = "corndisease_alexnetmodel.h5"
corn_model = tf.keras.models.load_model(corn_model_path)
corn_class_names = ["Healthy Corn Leaf", "Leaf Blight", "Leaf Rust", "Leaf Spot"]

# Tomato Model
tomato_model_path = "tomatodisease_alexnetmodel.h5"
tomato_model = tf.keras.models.load_model(tomato_model_path)
tomato_class_names = [
    "Bacterial spot",
    "Early blight",
    "Late blight",
    "Leaf Mold",
    "Septoria leaf spot",
    "Spider mites Two spotted spider mite",
    "Target Spot",
    "YellowLeaf Curl Virus",
    "mosaic virus",
    "Tomato healthy Leaf",
]

# Rice Model
rice_model_path = "ricedisease_alexnet.h5"
rice_model = tf.keras.models.load_model(rice_model_path)
rice_class_names = [
    "Bacterial Leaf Blight",
    "Brown Spot",
    "Healthy Rice Leaf",
    "Leaf Blast",
    "Leaf scald",
    "Narrow Brown Leaf Spot",
    "Neck Blast",
    "Rice Hispa",
    "Sheath Blight",
]
```

---

### Running the FastAPI Server

#### Prerequisites

Install required dependencies:

```bash
pip install -r requirements.txt
```

#### Start Server

```bash
# Using Uvicorn (default)
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Or using Python
python -m uvicorn main:app --reload
```

**Server Output**:

```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete
```

#### Access Application

- **Web Interface**: http://localhost:8000/
- **API Documentation**: http://localhost:8000/docs (Swagger UI)
- **Alternative Docs**: http://localhost:8000/redoc (ReDoc)

---

### Dependencies

See `requirements.txt` for complete list:

```
fastapi==0.104.1
uvicorn[standard]==0.24.0
tensorflow>=2.13.0
pillow>=9.0.0
numpy>=1.21.0
scikit-learn>=1.0.0
matplotlib>=3.5.0
```

---

## 🚀 Getting Started

### Installation

1. **Clone Repository**:

```bash
git clone <repository-url>
cd care-crops
```

2. **Create Virtual Environment**:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Dependencies**:

```bash
pip install -r requirements.txt
```

4. **Verify Model Files**:
   Ensure the following model files are in the root directory:

- `corndisease_alexnetmodel.h5`
- `tomatodisease_alexnetmodel.h5`
- `ricedisease_alexnet.h5`

5. **Run Application**:

```bash
uvicorn main:app --reload
```

### Usage

#### Via Web Interface

1. Navigate to http://localhost:8000/
2. Select crop type (Corn, Tomato, or Rice)
3. Upload leaf image
4. View prediction and confidence score

#### Via API

Use the `/classify` endpoint with cURL, Python, or JavaScript (see section above)

---

## 🔍 Model Details

### Training Process for Each Architecture

All models follow this standardized training pipeline:

1. **Data Loading**: Load images from class-organized directories
2. **Preprocessing**: Resize to architecture-specific dimensions (224×224 or 256×256)
3. **Augmentation**: Apply random transformations to training data
4. **Model Creation**: Build appropriate architecture (AlexNet, CustomCNN, ResNet50, DenseNet121, or VGG16)
5. **Compilation**: Configure optimizer, loss function, and metrics
6. **Training**: Fit on training data with validation monitoring
7. **Callbacks**: Apply learning rate reduction and early stopping
8. **Evaluation**: Assess performance on test set
9. **Visualization**: Plot accuracy/loss curves and sample predictions
10. **Metrics**: Calculate confusion matrix, F1 scores, precision, and recall
11. **Model Saving**: Save trained weights in .h5 and .keras formats

### Architecture-Specific Parameters

Different architectures are optimized for different input sizes:

| Architecture    | Input Size | Design                     | Training Purpose              |
| --------------- | ---------- | -------------------------- | ----------------------------- |
| **AlexNet**     | 256×256    | Custom CNN from scratch    | Baseline performance          |
| **CustomCNN**   | 256×256    | Lightweight with BatchNorm | Mobile/embedded use           |
| **ResNet50**    | 224×224    | Transfer learning          | Production with good speed    |
| **DenseNet121** | 224×224    | Transfer learning          | Production with high accuracy |
| **VGG16**       | 224×224    | Transfer learning          | Comparison/ensemble models    |

### Training Hyperparameters

| Parameter           | Value                    |
| ------------------- | ------------------------ |
| Learning Rate       | 0.0001                   |
| Optimizer           | Adam                     |
| Batch Size          | 8-32 (varies by model)   |
| Epochs              | 50 (with early stopping) |
| LR Reduction Factor | 0.3                      |
| LR Patience         | 2-4 epochs               |
| Early Stop Patience | 5-20 epochs              |

---

## 📊 Confusion Matrix Interpretation

The confusion matrix helps understand model performance:

- **Diagonal values** (top-left to bottom-right): Correct predictions
- **Off-diagonal values**: Misclassifications
- **Rows sum**: Total instances of that class
- **Columns sum**: Total predictions for that class

### Example Interpretation

```
                Predicted
              Healthy  Disease
Actual Healthy   95      5
       Disease    3      97
```

In this example:

- True Positives (Disease): 97 ✓
- True Negatives (Healthy): 95 ✓
- False Positives: 5 (healthy predicted as disease)
- False Negatives: 3 (disease missed)

---

## 📁 Training Notebooks & Model Files

The `model training/` directory contains Jupyter notebooks for each crop with all 5 architectures. A total of 15 training notebooks demonstrating the complete training pipeline.

### Corn Models

- `alexnet_model.ipynb` - AlexNet-inspired CNN (ACTIVE MODEL)
- `customCNN.ipynb` - Custom lightweight CNN
- `resnet50_model.ipynb` - ResNet50 transfer learning
- `vgg16_model.ipynb` - VGG16 transfer learning
- `densenet121_model.ipynb` - DenseNet121 transfer learning

**Trained Models (saved formats):**

- `corndisease_alexnetmodel.h5` - AlexNet model
- `corndisease_customCNN.h5` - Custom CNN model
- `corndisease_resnet50.h5` - ResNet50 model
- `corndisease_vgg16.h5` - VGG16 model
- `corndisease_densenet121.h5` - DenseNet121 model

### Tomato Models

- `alexnet_model.ipynb` - AlexNet-inspired CNN
- `customCNN.ipynb` - Custom lightweight CNN
- `resnet50_model.ipynb` - ResNet50 transfer learning
- `vgg16_model.ipynb` - VGG16 transfer learning
- `densenet121_model.ipynb` - DenseNet121 transfer learning

**Trained Models (saved formats):**

- `tomatodisease_alexnetmodel.h5` - AlexNet model
- `tomatodisease_customCNN.h5` - Custom CNN model
- `tomatodisease_resnet50.h5` - ResNet50 model
- `tomatodisease_vgg16.h5` - VGG16 model
- `tomatodisease_densenet121.h5` - DenseNet121 model

### Rice Models

- `alexnet_model.ipynb` - AlexNet-inspired CNN
- `customCNN.ipynb` - Custom lightweight CNN (384×384 input)
- `resnet50_model.ipynb` - ResNet50 transfer learning
- `vgg16_model.ipynb` - VGG16 transfer learning
- `densenet121_model.ipynb` - DenseNet121 transfer learning

**Trained Models (saved formats):**

- `ricedisease_alexnet.h5` - AlexNet model
- `ricedisease_customCNN.h5` - Custom CNN model
- `ricedisease_resnet50.h5` - ResNet50 model
- `ricedisease_vgg16.h5` - VGG16 model
- `ricedisease_densenet121.h5` - DenseNet121 model

### What Each Notebook Contains

Every training notebook follows a standardized workflow:

1. **Environment Setup**
   - Import required libraries (TensorFlow, scikit-learn, matplotlib)
   - Check GPU availability for accelerated training

2. **Dataset Loading**
   - Load images from directory structure
   - Display sample images with labels
   - Configure image size and batch size

3. **Data Preprocessing**
   - Split dataset: 80% train, 10% validation, 10% test
   - Apply data augmentation to training data
   - Cache and prefetch datasets for optimal performance

4. **Model Architecture**
   - Define appropriate architecture (varies by notebook)
   - Apply transfer learning for pre-trained models
   - Freeze base model weights for transfer learning

5. **Model Compilation**
   - Configure optimizer (Adam, lr=0.0001)
   - Set loss function (Sparse Categorical Crossentropy)
   - Track accuracy metrics

6. **Training with Callbacks**
   - ReduceLROnPlateau: Reduce learning rate if validation loss plateaus
   - EarlyStopping: Stop training if no improvement

7. **Evaluation**
   - Compute test set accuracy
   - Plot training history (accuracy & loss curves)
   - Visualize sample predictions

8. **Metrics Computation**
   - Generate confusion matrix
   - Calculate per-class F1 scores
   - Compute precision and recall metrics

9. **Model Saving**
   - Save in HDF5 format (.h5)
   - Save in Keras 3 format (.keras)

### Production Model Selection

The system currently uses **AlexNet models** for all crops (ACTIVE):

- `corndisease_alexnetmodel.h5` → Corn classification
- `tomatodisease_alexnetmodel.h5` → Tomato classification
- `ricedisease_alexnet.h5` → Rice classification

To switch to a different architecture, modify the model path in [main.py](main.py):

```python
# Example: Switch to ResNet50
corn_model_path = "corndisease_resnet50.h5"
tomato_model_path = "tomatodisease_resnet50.h5"
rice_model_path = "ricedisease_resnet50.h5"
```

---

## 🛠️ Troubleshooting

### Common Issues

#### Issue: Models not found

**Solution**: Ensure `.h5` files are in the same directory as `main.py`

#### Issue: Port 8000 already in use

**Solution**: Use different port:

```bash
uvicorn main:app --port 8001
```

#### Issue: Out of memory during training

**Solution**: Reduce batch size or image size in notebooks

#### Issue: Low accuracy

**Solution**:

- Check image quality and relevance
- Verify dataset is balanced
- Try different architectures
- Adjust learning rate
- Increase number of epochs

---

## 📝 Notes

- All models use sparse categorical crossentropy loss (labels are integers, not one-hot encoded)
- Confidence scores are probabilities between 0 and 1
- Image resizing accounts for different optimal input sizes for different architectures
- Early stopping prevents overfitting by monitoring validation loss
- Learning rate reduction helps fine-tune convergence

---

## 📄 License

This project is provided as-is for agricultural disease detection purposes.

---

## 📧 Support

For issues or questions, please refer to the documentation above or check the training notebooks for implementation details.

---

**Last Updated**: March 20, 2026

**Project Version**: 1.0

**Status**: Active
