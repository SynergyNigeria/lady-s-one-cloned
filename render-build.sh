#!/usr/bin/env sh
set -eu

API_URL="${SITE_INFO_API_URL:-http://127.0.0.1:8001/api/site-info/}"

cat > config.js <<EOF
window.siteInfoApiUrl = "$API_URL";
EOF
