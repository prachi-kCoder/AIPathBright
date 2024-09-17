from fastapi import FastAPI, HTTPException
import cohere
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  
)

cohere_api_key = os.getenv("COHERE_API_KEY")
if not cohere_api_key:
    raise ValueError("Cohere API key is missing!")

# Initialize Cohere client
cohere_client = cohere.Client(cohere_api_key)

@app.get("/")
def read_root():
    return {"message": "Welcome to CareerPathAI!"}

@app.post("/recommend")
async def recommend_career(student_profile: dict):
    text_input = f"Student with major {student_profile['major']}, GPA {student_profile['gpa']}, interests {', '.join(student_profile['interests'])}"

    # Use Cohere to generate career recommendations
    response = cohere_client.generate(
        model='command',
        prompt=f"Based on the following student profile: {text_input}, recommend a suitable career path.",
        max_tokens=1000,
    )
    # print("Cohere response:", response.generations)

    if not response or not response.generations:
        raise HTTPException(status_code=500, detail="No response from Cohere API")

    recommended_career_text = response.generations[0].text.strip()
        
        # Log the received text
    # print("Recommended Career Text:", recommended_career_text)

        # Split the text by numbered items (e.g., '1.', '2.', etc.)
    career_blocks = recommended_career_text.split("\n")

        # Initialize list to store careers and descriptions
    career_with_description = []
    current_career = ""
    current_description = ""

        # Process each line to categorize it as career or description
    for line in career_blocks:
        if line.startswith((".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")):  # Detect numbered career titles
            if current_career:  # If there's already a career being tracked, save it
                career_with_description.append({
                    "career": current_career.strip(),
                    "description": current_description.strip() if current_description.strip() else ""
                })
                current_description = ""  # Reset description for the next career

                # Start a new career
            current_career = line
        else:
                # Append line to the current description
            current_description += " " + line

    # Append the last career and description pair
    if current_career:
        career_with_description.append({
            "career": current_career.strip(),
            "description": current_description.strip() if current_description.strip() else ""
        })

    return {"recommended_careers": career_with_description}    
    
    

    # except Exception as e:
        # raise HTTPException(status_code=500, detail=str(e))
