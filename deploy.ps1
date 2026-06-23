param(
  [string]$VercelToken,
  [string]$RenderApiKey,
  [string]$BackendUrl
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  CodeVector - Full Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# ─── Step 1: Push to Git ───────────────────────────────────────────
Write-Host "`n[1/4] Pushing code to GitHub..." -ForegroundColor Yellow

$repoUrl = git remote get-url origin 2>$null
if (-not $repoUrl) {
  Write-Host "ERROR: No git remote 'origin' found. Set it with:" -ForegroundColor Red
  Write-Host "  git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git" -ForegroundColor Red
  exit 1
}

git add .
git commit -m "deploy: prepare for production" --allow-empty
git push origin main
if ($LASTEXITCODE -ne 0) {
  Write-Host "ERROR: Git push failed." -ForegroundColor Red
  exit 1
}
Write-Host "  Done." -ForegroundColor Green

# ─── Step 2: Deploy Backend to Render ──────────────────────────────
Write-Host "`n[2/4] Deploying backend to Render..." -ForegroundColor Yellow

if (-not $RenderApiKey) {
  Write-Host "  Skipping (no RenderApiKey provided). Deploy manually:" -ForegroundColor Magenta
  Write-Host "  1. Go to https://dashboard.render.com/new/web" -ForegroundColor Magenta
  Write-Host "  2. Connect your GitHub repo" -ForegroundColor Magenta
  Write-Host "  3. Root Directory: backend" -ForegroundColor Magenta
  Write-Host "  4. Runtime: Docker" -ForegroundColor Magenta
  Write-Host "  5. Set env vars: DATABASE_URL (your Neon URL)" -ForegroundColor Magenta
} else {
  $renderResp = Invoke-RestMethod -Uri "https://api.render.com/v1/deploys" -Method Post `
    -Headers @{ Authorization = "Bearer $RenderApiKey"; "Content-Type" = "application/json" } `
    -Body '{"serviceId":"YOUR_RENDER_SERVICE_ID","clearCache":"do_not_clear"}'
  Write-Host "  Triggered Render deploy: $($renderResp.id)" -ForegroundColor Green
}

# ─── Step 3: Get Backend URL ───────────────────────────────────────
Write-Host "`n[3/4] Backend URL..." -ForegroundColor Yellow

if (-not $BackendUrl) {
  $BackendUrl = Read-Host "  Enter your Render backend URL (e.g. https://codevector-backend.onrender.com)"
}
Write-Host "  Using: $BackendUrl" -ForegroundColor Green

# ─── Step 4: Deploy Frontend to Vercel ─────────────────────────────
Write-Host "`n[4/4] Deploying frontend to Vercel..." -ForegroundColor Yellow

if (-not $VercelToken) {
  Write-Host "  Skipping (no VercelToken provided). Deploy manually:" -ForegroundColor Magenta
  Write-Host "  1. cd client" -ForegroundColor Magenta
  Write-Host "  2. npx vercel --prod" -ForegroundColor Magenta
  Write-Host "  3. Set env: NEXT_PUBLIC_API_URL = $BackendUrl" -ForegroundColor Magenta
  Write-Host "  4. Ensure Vercel Project ID is connected to your GitHub" -ForegroundColor Magenta
} else {
  # Set environment variable on Vercel
  $vercelEnvBody = @{
    type = "encrypted"
    key = "NEXT_PUBLIC_API_URL"
    value = $BackendUrl
    target = @("production")
  } | ConvertTo-Json

  Invoke-RestMethod -Uri "https://api.vercel.com/v10/projects/YOUR_PROJECT_ID/env" -Method Post `
    -Headers @{ Authorization = "Bearer $VercelToken"; "Content-Type" = "application/json" } `
    -Body $vercelEnvBody | Out-Null

  # Trigger deploy
  $deployResp = Invoke-RestMethod -Uri "https://api.vercel.com/v13/deployments" -Method Post `
    -Headers @{ Authorization = "Bearer $VercelToken"; "Content-Type" = "application/json" } `
    -Body '{"name":"codevector","projectSettings":{"framework":"nextjs","buildCommand":"npx next build","outputDirectory":".next","installCommand":"npm install"},"target":"production"}' `
    -OutVariable deployResp

  $deployUrl = $deployResp.url
  Write-Host "  Vercel deploy triggered: https://$deployUrl" -ForegroundColor Green
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Deployment complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "`nManual steps still needed:" -ForegroundColor Yellow
Write-Host "  1. Update render.yaml repo/org name" -ForegroundColor Yellow
Write-Host "  2. Set DATABASE_URL secret in Render dashboard" -ForegroundColor Yellow
Write-Host "  3. Set NEXT_PUBLIC_API_URL in Vercel project env vars" -ForegroundColor Yellow
