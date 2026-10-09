#!/bin/sh
# Run once on Hostinger SSH after uploading/extracting the archive:
#   sh fix-permissions.sh
chmod -R u+rwX,go+rX .
