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
    "You are an e-commerce copywriting assistant tasked with creating an SEO-optimized product title for a specific platform listing.\n\n"
    f"- title: **{text_inputs[0]} – a product_category product. include: keyfeature**\n"
    f"- Description: {text_inputs[3]}. expalin how and why this product is useful at least 450 words. with bulletpoints highlights each bulletpoint should be atleast 65 words with precise specifications \n\n"
    f"- Brand Name: {text_inputs[1]}**\n\n"
    f"- Platform: {text_inputs[2]}**\n\n"
    "**Important:** Only use the provided product information. Do **not** invent features, specifications, or claims. Avoid adding anything not mentioned above.\n\n"
    "- **SEO Keywords:** Use the primary keyword and related keywords like **naturally** in the title to maximize search visibility.\n\n"
    "**Requirements by Platform:**\n"
    "- If the platform is **Amazon**:\n"
    "  - Keep the title **under 200 characters**, including spaces.\n"
    "  - Format = **Brand + Product Type + Key Features + Specs/Variant (Optional)**\n"
    "  - Use **Title Case**.\n"
    "  - Brand Name is which brand the product belongs to not users own brand**.\n"
    "  - 5 bullet points under 'About this item\n"
    "  - Avoid forbidden characters or terms (e.g., “#1”, “Free”, “Best Seller”).\n"
    "  - Do **not** repeat keywords unnecessarily.\n"
    
    "IF WALMART\n"
    "Generate a Walmart.com product listing for a [product type]. Include:"
    "Title (less than 75 characters)"
    "Key features in bullet points"
    "Product description (informative and Walmart-style tone)"
    "Remove generic disclaimers or filler content"
    
    
    "- If **Etsy**:\n"
    "Short product summary"
    "  - Make it natural and descriptive.\n"
    "  - Long description Prioritize handmade, material, style, and occasion.\n"
    "  - Stay within ~60 visible characters for Google (but you can go longer).\n"
    "Tags and keywords for Etsy search optimization"
    "  - Avoid keyword stuffing.\n"
    "- If **Shopify** or General Web:\n"
    "  - Keep it clean, on-brand, and readable.\n"
    "  - Limit to 5–8 impactful words (≤ 60 characters is ideal).\n"
    "  - Use the tone to reflect branding style.\n\n"
    "**Output Format:** A single SEO-optimized product title following all platform rules and fully ready for publishing."
)

    try:
        response = client.chat.completions.create(
            model="gpt-4.1",  # or "gpt-4-turbo"
            messages=[
                {"role": "system", "content": "You are a product listing generator. Output must be valid JSON."},
                {"role": "user", "content": prompt}
            ],
            response_format={"type": "json_object"},  # Ensures JSON output
            max_tokens=1500,
        )

        content = response.choices[0].message.content.strip()
        return json.loads(content)  # Directly parse JSON (no regex needed)

    except json.JSONDecodeError:
        raise ValueError("OpenAI did not return valid JSON.")
    except Exception as e:
        raise RuntimeError(f"OpenAI API error: {str(e)}")