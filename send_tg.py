import requests
import json
import os

TOKEN = "8592392993:AAEwkhGyzwhkQoSZNs8RA9wqGtRjEvwU_cA"
CHAT_ID = "@casino_slot_kh"
# Correcting path separators for Windows
IMAGE_PATH = r"C:\Users\user\.gemini\antigravity\brain\d6a0271f-21b7-41bb-824f-489fb43c5617\uploaded_image_1769252033247.jpg"

CAPTION = """✅ ដកប្រាក់បានជោគជ័យ! 💸

ថ្ងៃនេះខ្ញុំរកបាន +$120 ពីការលេង បាការ៉ាត់ (Baccarat)។ 1win គឺជាវេបសាយល្អបំផុតនៅកម្ពុជា 🇰🇭

🔹 ដាក់ប្រាក់ និងដកប្រាក់តាមរយៈ ABA Bank / Wing 🔹 ដកប្រាក់លឿនណាស់ (1-2 នាទី) 🔹 មិនបោកប្រាស់ 💯

កុំរង់ចាំ! ចាប់ផ្តើមរកលុយឥឡូវនេះ 👇"""

# Placeholder URL - User to verify or I'll provide a generic one
BUTTON_URL = "https://1win.pro" 
BUTTON_TEXT = "1win"

def send_post():
    url = f"https://api.telegram.org/bot{TOKEN}/sendPhoto"
    
    if not os.path.exists(IMAGE_PATH):
        print(f"Error: Image not found at {IMAGE_PATH}")
        return

    try:
        with open(IMAGE_PATH, 'rb') as img_file:
            payload = {
                'chat_id': CHAT_ID,
                'caption': CAPTION,
                'reply_markup': json.dumps({
                    "inline_keyboard": [[
                        {"text": BUTTON_TEXT, "url": BUTTON_URL}
                    ]]
                })
            }
            files = {
                'photo': img_file
            }
            
            print(f"Sending request to {url}...")
            response = requests.post(url, data=payload, files=files)
            
            print("Status Code:", response.status_code)
            print("Response:", response.text)
            
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    send_post()
