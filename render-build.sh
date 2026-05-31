#!/usr/bin/env sh
set -eu

SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
API_URL="${SITE_INFO_API_URL:-http://127.0.0.1:8001/api/site-info/}"

cat > "$SCRIPT_DIR/config.js" <<EOF
window.siteInfoApiUrl = "$API_URL";
EOF
