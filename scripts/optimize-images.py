"""Resize and compress images used on the wedding site."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "Assets" / "images"

FILES = {
    "foto4.jpg": 1920,
    "GABY&CARLOS18.jpg": 1600,
    "GABY&CARLOS65.jpg": 1600,
    "GABY&CARLOS75.jpg": 1600,
    "GABY&CARLOS.jpg": 1400,
    "GABY&CARLOS10.jpg": 1400,
    "GABY&CARLOS22.jpg": 1400,
    "GABY&CARLOS33.jpg": 1400,
    "GABY&CARLOS44.jpg": 1400,
    "GABY&CARLOS55.jpg": 1400,
    "GABY&CARLOS66.jpg": 1400,
    "GABY&CARLOS85.jpg": 1400,
    "GABY&CARLOS95.jpg": 1400,
}


def optimize_jpeg(path: Path, max_width: int) -> None:
    before = path.stat().st_size
    image = Image.open(path).convert("RGB")
    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    image.save(path, format="JPEG", quality=82, optimize=True, progressive=True)
    after = path.stat().st_size
    print(f"{path.name}: {before / 1024 / 1024:.2f} MB -> {after / 1024 / 1024:.2f} MB")


def optimize_png(path: Path, max_width: int) -> None:
    before = path.stat().st_size
    image = Image.open(path).convert("RGB")
    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    jpg_path = path.with_suffix(".jpg")
    image.save(jpg_path, format="JPEG", quality=85, optimize=True, progressive=True)
    path.unlink()
    after = jpg_path.stat().st_size
    print(f"{path.name} -> {jpg_path.name}: {before / 1024 / 1024:.2f} MB -> {after / 1024 / 1024:.2f} MB")


def optimize_marble_background() -> None:
    source = IMAGES / "Marble_Background.png"
    if not source.exists():
        print("Skip missing file: Marble_Background.png")
        return

    before = source.stat().st_size
    image = Image.open(source).convert("RGB")
    max_width = 2560
    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)

    webp_path = IMAGES / "Marble_Background.webp"
    jpg_path = IMAGES / "Marble_Background.jpg"
    image.save(webp_path, format="WEBP", quality=90, method=6)
    image.save(jpg_path, format="JPEG", quality=90, optimize=True, progressive=True)
    print(
        f"Marble_Background: {before / 1024 / 1024:.2f} MB -> "
        f"webp {webp_path.stat().st_size / 1024:.0f} KB, "
        f"jpg {jpg_path.stat().st_size / 1024:.0f} KB"
    )


def main() -> None:
    optimize_marble_background()

    for name, max_width in FILES.items():
        path = IMAGES / name
        if not path.exists():
            print(f"Skip missing file: {name}")
            continue
        if path.suffix.lower() == ".png":
            optimize_png(path, max_width)
        else:
            optimize_jpeg(path, max_width)


if __name__ == "__main__":
    main()
