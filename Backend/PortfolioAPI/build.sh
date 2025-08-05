#!/bin/bash
set -o errexit

uv pip install -r requirements.txt
uv run manage.py collectstatic --no-input
#uv run manage.py migrate