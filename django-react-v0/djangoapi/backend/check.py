from decouple import config

# Read variables from .env
environment = config('ENVIRONMENT', default='production')
secret_key = config('SECRET_KEY', default='no-secret')
database_url = config('DATABASE_URL', default='sqlite:///fallback.db')
openai_key = config('OPENAI_API_KEY', default='not-set')

# Print them
print("ENVIRONMENT:", environment)
print("SECRET_KEY:", secret_key)
print("DATABASE_URL:", database_url)
print("OPENAI_API_KEY:", openai_key)
