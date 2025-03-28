let all_solution = [
  {
    crop_name: "corn",
    disease: "Healthy Corn Leaf",
    cause: "No disease detected",
    solution: [
      "No action is required.",
      "Regularly monitor crops for early signs of disease.",
      "Maintain proper field hygiene by removing weeds and debris.",
      "Use certified disease-free seeds.",
      "Ensure proper irrigation to avoid stress on plants.",
    ],
  },
  {
    crop_name: "corn",
    disease: "Leaf Blight",
    cause:
      "Fungal pathogens like Exserohilum turcicum (Northern Corn Leaf Blight) or Bipolaris maydis (Southern Corn Leaf Blight)",
    solution: [
      "Apply fungicides such as Mancozeb or Propiconazole.",
      "Use resistant corn varieties suitable for your region.",
      "Practice crop rotation with non-host crops like soybeans.",
      "Remove and destroy infected plant residues after harvest.",
      "Ensure proper plant spacing to improve air circulation.",
    ],
  },
  {
    crop_name: "corn",
    disease: "Leaf Rust",
    cause: "Fungus Puccinia sorghi",
    solution: [
      "Apply fungicides like Azoxystrobin or Triazole-based treatments.",
      "Avoid overhead irrigation to reduce leaf wetness.",
      "Grow resistant corn hybrids to minimize susceptibility.",
      "Remove and destroy volunteer corn plants that can harbor rust spores.",
      "Ensure timely planting to avoid high spore concentration periods.",
    ],
  },
  {
    crop_name: "corn",
    disease: "Leaf Spot",
    cause: "Fungal pathogens such as Cercospora zeae-maydis (Gray Leaf Spot)",
    solution: [
      "Use fungicides containing Strobilurin or Chlorothalonil.",
      "Rotate crops with non-host species like legumes.",
      "Remove and burn infected debris after harvest to prevent spread.",
      "Avoid high plant density to promote better air circulation.",
      "Monitor fields regularly and apply treatments early when symptoms appear.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Bacterial Leaf Blight",
    cause: "Caused by the bacterium Xanthomonas oryzae pv. oryzae.",
    solution: [
      "Use resistant rice varieties (e.g., IR64, IR24).",
      "Avoid excessive nitrogen fertilizer to prevent susceptibility.",
      "Apply bactericides like copper-based sprays (e.g., Copper oxychloride).",
      "Ensure proper drainage to avoid water stagnation.",
      "Destroy infected plants and maintain field hygiene.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Brown Spot",
    cause: "Caused by the fungus Bipolaris oryzae.",
    solution: [
      "Apply fungicides like Mancozeb or Carbendazim.",
      "Use balanced fertilizers, especially potassium and phosphorus.",
      "Treat seeds with fungicides or hot water before sowing.",
      "Rotate crops to reduce pathogen buildup in the soil.",
      "Improve irrigation practices to avoid prolonged leaf wetness.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Healthy Rice Leaf",
    cause: "Indicates the leaf is free from diseases.",
    solution: [
      "No action is required.",
      "Regularly monitor crops to detect early symptoms.",
      "Maintain proper field sanitation by removing weeds and debris.",
      "Ensure adequate fertilization for healthy plant growth.",
      "Avoid over-irrigation to prevent stress and fungal infections.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Leaf Blast",
    cause: "Caused by the fungus Magnaporthe oryzae.",
    solution: [
      "Apply fungicides like Tricyclazole or Azoxystrobin.",
      "Grow resistant rice varieties (e.g., IR36, HR12).",
      "Avoid water stress during critical growth stages.",
      "Practice proper nitrogen management to prevent excessive growth.",
      "Remove infected plant residues after harvest.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Leaf Scald",
    cause: "Caused by the fungus Microdochium oryzae.",
    solution: [
      "Apply fungicides like Mancozeb or Thiophanate-methyl.",
      "Ensure proper crop rotation to reduce fungal spread.",
      "Avoid over-fertilization, particularly nitrogen.",
      "Improve field drainage to prevent water stagnation.",
      "Use certified disease-free seeds for planting.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Narrow Brown Leaf Spot",
    cause: "Caused by the fungus Cercospora janseana.",
    solution: [
      "Apply fungicides containing Chlorothalonil or Mancozeb.",
      "Rotate crops with non-host species.",
      "Use resistant rice varieties when available.",
      "Maintain proper plant spacing to improve air circulation.",
      "Treat seeds with appropriate fungicides before planting.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Neck Blast",
    cause: "A severe form of rice blast caused by Magnaporthe oryzae.",
    solution: [
      "Apply systemic fungicides like Tricyclazole or Isoprothiolane.",
      "Ensure continuous water coverage during flowering to reduce infections.",
      "Use resistant rice varieties to minimize susceptibility.",
      "Reduce nitrogen application during reproductive stages.",
      "Remove and destroy infected plant residues post-harvest.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Rice Hispa",
    cause: "Caused by the insect Dicladispa armigera (Rice Hispa).",
    solution: [
      "Apply insecticides like Chlorpyrifos or Lambda-cyhalothrin.",
      "Manually remove and destroy affected leaves.",
      "Flood fields to force larvae out of leaf sheaths.",
      "Use resistant rice varieties when available.",
      "Maintain clean field edges to minimize pest habitats.",
    ],
  },
  {
    crop_name: "rice",
    disease: "Sheath Blight",
    cause: "Caused by the fungus Rhizoctonia solani.",
    solution: [
      "Apply fungicides like Propiconazole or Hexaconazole.",
      "Reduce plant density to improve air circulation.",
      "Use balanced fertilization to avoid excessive nitrogen application.",
      "Remove infected plant residues after harvest.",
      "Grow resistant rice varieties if available.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Target Spot",
    cause: "Caused by the fungus Corynespora cassiicola.",
    solution: [
      "Apply fungicides like Chlorothalonil or Mancozeb.",
      "Remove infected leaves and plant debris regularly.",
      "Use disease-free seeds for planting.",
      "Avoid waterlogging and maintain proper drainage.",
      "Practice crop rotation with non-host crops like legumes.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "mosaic virus",
    cause: "Caused by the Tomato mosaic virus.",
    solution: [
      "Use virus-resistant tomato varieties.",
      "Sterilize tools and hands before handling plants.",
      "Remove and destroy infected plants immediately.",
      "Control weeds that may host the virus.",
      "Avoid tobacco products near plants, as they can carry the virus.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "YellowLeaf Curl Virus",
    cause: "Transmitted by the whitefly (Bemisia tabaci).",
    solution: [
      "Apply insecticides to control whiteflies (e.g., Imidacloprid).",
      "Use reflective mulches to deter whiteflies.",
      "Grow TYLCV-resistant tomato varieties.",
      "Remove and destroy infected plants promptly.",
      "Install physical barriers like netting to prevent whitefly infestations.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Bacterial spot",
    cause: "Caused by Xanthomonas campestris pv. vesicatoria.",
    solution: [
      "Apply copper-based bactericides like Copper oxychloride.",
      "Avoid overhead irrigation to minimize leaf wetness.",
      "Use certified pathogen-free seeds.",
      "Rotate crops to reduce bacterial buildup in the soil.",
      "Remove and destroy infected plant debris.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Early blight",
    cause: "Caused by the fungus Alternaria solani.",
    solution: [
      "Apply fungicides like Chlorothalonil or Mancozeb.",
      "Use disease-resistant tomato varieties.",
      "Remove and destroy infected leaves regularly.",
      "Maintain proper spacing between plants for air circulation.",
      "Ensure adequate irrigation to prevent plant stress.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Tomato healthy Leaf",
    cause: "Indicates the plant is free from diseases.",
    solution: [
      "No immediate action required.",
      "Monitor plants regularly for any signs of disease.",
      "Maintain proper soil fertility with balanced fertilizers.",
      "Ensure proper spacing between plants for air circulation.",
      "Practice good irrigation techniques to avoid water stress.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Late blight",
    cause: "Caused by the fungus Phytophthora infestans.",
    solution: [
      "Apply fungicides like Metalaxyl or Mancozeb.",
      "Use disease-resistant tomato varieties.",
      "Remove infected plant debris and destroy it.",
      "Avoid overhead irrigation to prevent prolonged leaf wetness.",
      "Ensure proper field drainage to avoid water stagnation.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Powdery Mildew",
    cause: "Fungal infection caused by Leveillula taurica.",
    solution: [
      "Apply fungicides like Sulfur or Tebuconazole.",
      "Remove and destroy infected plant parts.",
      "Improve air circulation by pruning dense foliage.",
      "Rotate crops with non-host plants.",
      "Avoid excessive watering, as moisture encourages fungal growth.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Tomato Wilt",
    cause: "Fungal infection caused by Fusarium oxysporum.",
    solution: [
      "Use resistant tomato varieties when available.",
      "Practice crop rotation to break the disease cycle.",
      "Improve soil drainage to reduce pathogen buildup.",
      "Remove and destroy infected plants.",
      "Ensure proper spacing between plants for airflow.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Leaf Mold",
    cause: "Caused by the fungus Passalora fulva.",
    solution: [
      "Apply fungicides like Chlorothalonil or Copper oxychloride.",
      "Ensure proper ventilation in greenhouses or dense plantings.",
      "Remove infected leaves and debris from the field.",
      "Avoid overhead irrigation to prevent humidity buildup.",
      "Use resistant tomato varieties where available.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Septoria leaf spot",
    cause: "Caused by the fungus Septoria lycopersici.",
    solution: [
      "Apply fungicides like Mancozeb or Chlorothalonil.",
      "Remove infected leaves and practice crop sanitation.",
      "Avoid watering leaves and use drip irrigation instead.",
      "Rotate crops with non-host species to break the pathogen cycle.",
      "Use disease-free seeds and seedlings.",
    ],
  },
  {
    crop_name: "tomato",
    disease: "Spider mites Two spotted spider mite",
    cause: "Caused by Tetranychus urticae.",
    solution: [
      "Apply miticides like Abamectin or Spiromesifen.",
      "Spray plants with a strong jet of water to dislodge mites.",
      "Introduce natural predators like ladybugs or predatory mites.",
      "Maintain humidity levels to discourage mite infestations.",
      "Remove heavily infested leaves to prevent the spread.",
    ],
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cropForm");
  const resultDiv = document.getElementById("result");
  const resetButton = document.getElementById("resetButton");
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("crop_image");
  const fileNameSpan = document.getElementById("fileName");
  let all_solution = [
    {
      crop_name: "corn",
      disease: "Healthy Corn Leaf",
      cause: "No disease detected",
      solution: [
        "No action is required.",
        "Regularly monitor crops for early signs of disease.",
        "Maintain proper field hygiene by removing weeds and debris.",
        "Use certified disease-free seeds.",
        "Ensure proper irrigation to avoid stress on plants.",
      ],
    },
    {
      crop_name: "corn",
      disease: "Leaf Blight",
      cause:
        "Fungal pathogens like Exserohilum turcicum (Northern Corn Leaf Blight) or Bipolaris maydis (Southern Corn Leaf Blight)",
      solution: [
        "Apply fungicides such as Mancozeb or Propiconazole.",
        "Use resistant corn varieties suitable for your region.",
        "Practice crop rotation with non-host crops like soybeans.",
        "Remove and destroy infected plant residues after harvest.",
        "Ensure proper plant spacing to improve air circulation.",
      ],
    },
    {
      crop_name: "corn",
      disease: "Leaf Rust",
      cause: "Fungus Puccinia sorghi",
      solution: [
        "Apply fungicides like Azoxystrobin or Triazole-based treatments.",
        "Avoid overhead irrigation to reduce leaf wetness.",
        "Grow resistant corn hybrids to minimize susceptibility.",
        "Remove and destroy volunteer corn plants that can harbor rust spores.",
        "Ensure timely planting to avoid high spore concentration periods.",
      ],
    },
    {
      crop_name: "corn",
      disease: "Leaf Spot",
      cause: "Fungal pathogens such as Cercospora zeae-maydis (Gray Leaf Spot)",
      solution: [
        "Use fungicides containing Strobilurin or Chlorothalonil.",
        "Rotate crops with non-host species like legumes.",
        "Remove and burn infected debris after harvest to prevent spread.",
        "Avoid high plant density to promote better air circulation.",
        "Monitor fields regularly and apply treatments early when symptoms appear.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Bacterial Leaf Blight",
      cause: "Caused by the bacterium Xanthomonas oryzae pv. oryzae.",
      solution: [
        "Use resistant rice varieties (e.g., IR64, IR24).",
        "Avoid excessive nitrogen fertilizer to prevent susceptibility.",
        "Apply bactericides like copper-based sprays (e.g., Copper oxychloride).",
        "Ensure proper drainage to avoid water stagnation.",
        "Destroy infected plants and maintain field hygiene.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Brown Spot",
      cause: "Caused by the fungus Bipolaris oryzae.",
      solution: [
        "Apply fungicides like Mancozeb or Carbendazim.",
        "Use balanced fertilizers, especially potassium and phosphorus.",
        "Treat seeds with fungicides or hot water before sowing.",
        "Rotate crops to reduce pathogen buildup in the soil.",
        "Improve irrigation practices to avoid prolonged leaf wetness.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Healthy Rice Leaf",
      cause: "Indicates the leaf is free from diseases.",
      solution: [
        "No action is required.",
        "Regularly monitor crops to detect early symptoms.",
        "Maintain proper field sanitation by removing weeds and debris.",
        "Ensure adequate fertilization for healthy plant growth.",
        "Avoid over-irrigation to prevent stress and fungal infections.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Leaf Blast",
      cause: "Caused by the fungus Magnaporthe oryzae.",
      solution: [
        "Apply fungicides like Tricyclazole or Azoxystrobin.",
        "Grow resistant rice varieties (e.g., IR36, HR12).",
        "Avoid water stress during critical growth stages.",
        "Practice proper nitrogen management to prevent excessive growth.",
        "Remove infected plant residues after harvest.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Leaf Scald",
      cause: "Caused by the fungus Microdochium oryzae.",
      solution: [
        "Apply fungicides like Mancozeb or Thiophanate-methyl.",
        "Ensure proper crop rotation to reduce fungal spread.",
        "Avoid over-fertilization, particularly nitrogen.",
        "Improve field drainage to prevent water stagnation.",
        "Use certified disease-free seeds for planting.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Narrow Brown Leaf Spot",
      cause: "Caused by the fungus Cercospora janseana.",
      solution: [
        "Apply fungicides containing Chlorothalonil or Mancozeb.",
        "Rotate crops with non-host species.",
        "Use resistant rice varieties when available.",
        "Maintain proper plant spacing to improve air circulation.",
        "Treat seeds with appropriate fungicides before planting.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Neck Blast",
      cause: "A severe form of rice blast caused by Magnaporthe oryzae.",
      solution: [
        "Apply systemic fungicides like Tricyclazole or Isoprothiolane.",
        "Ensure continuous water coverage during flowering to reduce infections.",
        "Use resistant rice varieties to minimize susceptibility.",
        "Reduce nitrogen application during reproductive stages.",
        "Remove and destroy infected plant residues post-harvest.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Rice Hispa",
      cause: "Caused by the insect Dicladispa armigera (Rice Hispa).",
      solution: [
        "Apply insecticides like Chlorpyrifos or Lambda-cyhalothrin.",
        "Manually remove and destroy affected leaves.",
        "Flood fields to force larvae out of leaf sheaths.",
        "Use resistant rice varieties when available.",
        "Maintain clean field edges to minimize pest habitats.",
      ],
    },
    {
      crop_name: "rice",
      disease: "Sheath Blight",
      cause: "Caused by the fungus Rhizoctonia solani.",
      solution: [
        "Apply fungicides like Propiconazole or Hexaconazole.",
        "Reduce plant density to improve air circulation.",
        "Use balanced fertilization to avoid excessive nitrogen application.",
        "Remove infected plant residues after harvest.",
        "Grow resistant rice varieties if available.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Target Spot",
      cause: "Caused by the fungus Corynespora cassiicola.",
      solution: [
        "Apply fungicides like Chlorothalonil or Mancozeb.",
        "Remove infected leaves and plant debris regularly.",
        "Use disease-free seeds for planting.",
        "Avoid waterlogging and maintain proper drainage.",
        "Practice crop rotation with non-host crops like legumes.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "mosaic virus",
      cause: "Caused by the Tomato mosaic virus.",
      solution: [
        "Use virus-resistant tomato varieties.",
        "Sterilize tools and hands before handling plants.",
        "Remove and destroy infected plants immediately.",
        "Control weeds that may host the virus.",
        "Avoid tobacco products near plants, as they can carry the virus.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "YellowLeaf Curl Virus",
      cause: "Transmitted by the whitefly (Bemisia tabaci).",
      solution: [
        "Apply insecticides to control whiteflies (e.g., Imidacloprid).",
        "Use reflective mulches to deter whiteflies.",
        "Grow TYLCV-resistant tomato varieties.",
        "Remove and destroy infected plants promptly.",
        "Install physical barriers like netting to prevent whitefly infestations.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Bacterial spot",
      cause: "Caused by Xanthomonas campestris pv. vesicatoria.",
      solution: [
        "Apply copper-based bactericides like Copper oxychloride.",
        "Avoid overhead irrigation to minimize leaf wetness.",
        "Use certified pathogen-free seeds.",
        "Rotate crops to reduce bacterial buildup in the soil.",
        "Remove and destroy infected plant debris.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Early blight",
      cause: "Caused by the fungus Alternaria solani.",
      solution: [
        "Apply fungicides like Chlorothalonil or Mancozeb.",
        "Use disease-resistant tomato varieties.",
        "Remove and destroy infected leaves regularly.",
        "Maintain proper spacing between plants for air circulation.",
        "Ensure adequate irrigation to prevent plant stress.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Tomato healthy Leaf",
      cause: "Indicates the plant is free from diseases.",
      solution: [
        "No immediate action required.",
        "Monitor plants regularly for any signs of disease.",
        "Maintain proper soil fertility with balanced fertilizers.",
        "Ensure proper spacing between plants for air circulation.",
        "Practice good irrigation techniques to avoid water stress.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Late blight",
      cause: "Caused by the fungus Phytophthora infestans.",
      solution: [
        "Apply fungicides like Metalaxyl or Mancozeb.",
        "Use disease-resistant tomato varieties.",
        "Remove infected plant debris and destroy it.",
        "Avoid overhead irrigation to prevent prolonged leaf wetness.",
        "Ensure proper field drainage to avoid water stagnation.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Powdery Mildew",
      cause: "Fungal infection caused by Leveillula taurica.",
      solution: [
        "Apply fungicides like Sulfur or Tebuconazole.",
        "Remove and destroy infected plant parts.",
        "Improve air circulation by pruning dense foliage.",
        "Rotate crops with non-host plants.",
        "Avoid excessive watering, as moisture encourages fungal growth.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Tomato Wilt",
      cause: "Fungal infection caused by Fusarium oxysporum.",
      solution: [
        "Use resistant tomato varieties when available.",
        "Practice crop rotation to break the disease cycle.",
        "Improve soil drainage to reduce pathogen buildup.",
        "Remove and destroy infected plants.",
        "Ensure proper spacing between plants for airflow.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Leaf Mold",
      cause: "Caused by the fungus Passalora fulva.",
      solution: [
        "Apply fungicides like Chlorothalonil or Copper oxychloride.",
        "Ensure proper ventilation in greenhouses or dense plantings.",
        "Remove infected leaves and debris from the field.",
        "Avoid overhead irrigation to prevent humidity buildup.",
        "Use resistant tomato varieties where available.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Septoria leaf spot",
      cause: "Caused by the fungus Septoria lycopersici.",
      solution: [
        "Apply fungicides like Mancozeb or Chlorothalonil.",
        "Remove infected leaves and practice crop sanitation.",
        "Avoid watering leaves and use drip irrigation instead.",
        "Rotate crops with non-host species to break the pathogen cycle.",
        "Use disease-free seeds and seedlings.",
      ],
    },
    {
      crop_name: "tomato",
      disease: "Spider mites Two spotted spider mite",
      cause: "Caused by Tetranychus urticae.",
      solution: [
        "Apply miticides like Abamectin or Spiromesifen.",
        "Spray plants with a strong jet of water to dislodge mites.",
        "Introduce natural predators like ladybugs or predatory mites.",
        "Maintain humidity levels to discourage mite infestations.",
        "Remove heavily infested leaves to prevent the spread.",
      ],
    },
  ];

  dropZone.addEventListener("click", () => fileInput.click());

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("dragover");

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      dropZone.textContent = `Selected file: ${files[0].name}`;
      dropZone.style.borderColor = "#4caf50";
      dropZone.style.color = "#4caf50";
      dropZone.style.backgroundColor = "#e8f5e9";
    }
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      dropZone.textContent = `Selected file: ${fileInput.files[0].name}`;
      dropZone.style.borderColor = "#4caf50";
      dropZone.style.color = "#4caf50";
      dropZone.style.backgroundColor = "#e8f5e9";
    } else {
      resetDropZone();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cropSelect = document.getElementById("crop_name");
    if (cropSelect.value === "" || fileInput.files.length === 0) {
      alert("Please select a crop and upload an image.");
      return;
    }

    const submitButton = event.target.querySelector("button");
    submitButton.innerHTML =
      '<span class="material-icons">hourglass_empty</span> Processing...';
    submitButton.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch("/classify", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to classify the image");
      }

      const result = await response.json();

      if (result.error) {
        alert(result.error);
        return;
      }

      document.getElementById("resultCropName").textContent = result.crop_name;
      document.getElementById("resultClass").textContent =
        result.predicted_class;
      document.getElementById("resultConfidence").textContent = `${(
        result.confidence * 100
      ).toFixed(2)}%`;

      let crop_name = result.crop_name;
      let predicted_class = result.predicted_class;
      console.log(crop_name, predicted_class);
      let diseaseDetails = all_solution.find(
        (solution) =>
          solution.crop_name === crop_name &&
          solution.disease === predicted_class
      );

      if (diseaseDetails) {
        document.getElementById("resultCause").textContent =
          diseaseDetails.cause;

        let solutionList = document.getElementById("solutionList");
        solutionList.innerHTML = "";

        diseaseDetails.solution.forEach((solutionText) => {
          let li = document.createElement("li");
          li.textContent = solutionText;
          solutionList.appendChild(li);
        });
      } else {
        let solutionList = document.getElementById("solutionList");
        solutionList.innerHTML =
          "<li>No specific solution found. Please consult with an expert.</li>";
      }

      const uploadedImage = document.getElementById("uploadedImage");
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        uploadedImage.src = e.target.result;
      };

      reader.readAsDataURL(file);

      form.style.display = "none";
      resultDiv.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      submitButton.innerHTML =
        '<span class="material-icons">upload</span> Submit';
      submitButton.disabled = false;
    }
  });

  resetButton.addEventListener("click", () => {
    form.reset();
    resetDropZone();
    form.style.display = "block";
    resultDiv.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });

    const submitButton = form.querySelector("button");
    submitButton.innerHTML =
      '<span class="material-icons">upload</span> Submit';
    submitButton.disabled = false;
  });

  function resetDropZone() {
    dropZone.textContent = "Drag and drop an image here";
    dropZone.style.borderColor = "#ccc";
    dropZone.style.color = "#666";
    dropZone.style.backgroundColor = "";
  }
});
