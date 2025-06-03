# from openai import OpenAI
# import json
# import re
# from django.conf import settings

# client = OpenAI(api_key=settings.OPENAI_API_KEY)

# def generate_product_listing(text_inputs):
#     prompt = (
#         "You are an AI assistant generating product listings in JSON.\n"
#         "Output format:\n"
#         "{\n"
#         "  \"title\": \"...\",\n"
#         "  \"description\": \"...\",\n"
#         "  \"tags\": \"comma,separated,tags\"\n"
#         "}\n\n"
#         "**Disclaimer**: Provide detailed product specifications in the description.\n\n"
#         "Input:\n"
#         f"Title: {text_inputs[0]}\n"
#         f"Description: {text_inputs[1]}"
#     )

#     response = client.chat.completions.create(
#         model="gpt-4.1",
#         messages=[
#             {"role": "system", "content": "Output only a JSON product listing."},
#             {"role": "user", "content": prompt}
#         ],
#         max_tokens=300,
#     )

#     content = response.choices[0].message.content.strip()
#     json_text = re.search(r'\{.*\}', content, re.DOTALL)
#     if json_text:
#         return json.loads(json_text.group())
#     else:
#         raise ValueError("Invalid JSON format returned from OpenAI.")
from openai import OpenAI
import json
from django.conf import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)

def generate_product_listing(text_inputs):
    # Validate input
    if len(text_inputs) < 2:
        raise ValueError("text_inputs must contain at least title and description.")

    prompt = (
        "Generate a product listing in JSON format with the following structure:\n"
        "{\n"
        '  "title": "Product Name",\n'
        '  "description": "Detailed product specifications...",\n'
        '  "tags": "comma,separated,keywords"\n'
        "}\n\n"
        "**Input Data**:\n"
        f"Title: {text_inputs[0]}\n"
        f"Description: {text_inputs[1]}"
    )

    try:
        response = client.chat.completions.create(
            model="gpt-4o",  # or "gpt-4-turbo"
            messages=[
                {"role": "system", "content": "You are a product listing generator. Output must be valid JSON."},
                {"role": "user", "content": prompt}
            ],
            response_format={"type": "json_object"},  # Ensures JSON output
            max_tokens=300,
        )

        content = response.choices[0].message.content.strip()
        return json.loads(content)  # Directly parse JSON (no regex needed)

    except json.JSONDecodeError:
        raise ValueError("OpenAI did not return valid JSON.")
    except Exception as e:
        raise RuntimeError(f"OpenAI API error: {str(e)}")