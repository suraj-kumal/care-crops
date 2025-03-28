from fastapi import FastAPI, File, Form, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import os
from PIL import Image
import numpy as np
import tensorflow as tf

app = FastAPI()

static_dir = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=static_dir), name="static")

corn_model_path = "corndisease_alexnetmodel.h5"
corn_model = tf.keras.models.load_model(corn_model_path)
corn_class_names = ["Healthy Corn Leaf", "Leaf Blight", "Leaf Rust", "Leaf Spot"]

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


@app.get("/")
async def root():
    try:
        home_path = os.path.join(static_dir, "Home.html")
        with open(home_path, "r") as file:
            return HTMLResponse(content=file.read())
    except FileNotFoundError:
        return HTMLResponse(
            content=f"Error: Home.html not found in {static_dir}", status_code=404
        )
    except Exception as e:
        return HTMLResponse(content=f"Error: {str(e)}", status_code=500)


@app.get("/about")
async def about():
    home_path = os.path.join(static_dir, "About.html")
    with open(home_path, "r") as file:
        return HTMLResponse(content=file.read())


@app.post("/classify")
async def classify(crop_name: str = Form(...), crop_image: UploadFile = File(...)):
    try:
        image = Image.open(crop_image.file)

        if crop_name.lower() == "corn":
            model = corn_model
            class_names = corn_class_names
            image = image.resize((224, 224))
        elif crop_name.lower() == "tomato":
            model = tomato_model
            class_names = tomato_class_names
            image = image.resize((256, 256))
        elif crop_name.lower() == "rice":
            model = rice_model
            class_names = rice_class_names
            image = image.resize((256, 256))
        else:
            return {"error": "Unsupported crop type"}

        image_array = np.array(image)
        image_array = np.expand_dims(image_array, axis=0)

        prediction = model.predict(image_array)
        predicted_index = np.argmax(prediction)
        predicted_class = class_names[predicted_index]
        confidence = float(np.max(prediction))

        return {
            "message": f"{crop_name} leaf image processed successfully",
            "crop_name": crop_name,
            "predicted_class": predicted_class,
            "confidence": confidence,
        }

    except Exception as e:
        print(f"Classification error: {str(e)}")
        return {"error": f"An error occurred: {str(e)}"}
