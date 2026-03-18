# fix_lab9.py: Remove duplicate Exercise 8 from top and ensure it appears once before Ex9
import json

path = "Lab9_GeoAI_with_answers.ipynb"
with open(path, "r", encoding="utf-8") as f:
    nb = json.load(f)

cells = nb["cells"]
# Duplicate block is cells 3-8 (one markdown section8 + 5 code cells)
cells_new = cells[:3] + cells[9:]

# Find index of the SECTION HEADER for Exercise 9 (markdown with <a name="section9"> and ## **Exercise 9**), not the TOC
idx9 = None
for i, c in enumerate(cells_new):
    if c.get("cell_type") != "markdown":
        continue
    src = "".join(c.get("source", []))
    if 'name="section9"' in src and "## **Exercise 9**" in src:
        idx9 = i
        break
if idx9 is None:
    raise SystemExit("section9 header not found")

# Exercise 8 markdown
ex8_md = {
    "cell_type": "markdown",
    "metadata": {},
    "source": [
        '<a name="section8"></a>\n',
        "## **Exercise 8** – Compare predictions on train set (actual vs predicted, metrics)\n",
        "\n",
        "**What we do here:** We do not have ground-truth labels for the test set, so we compare predictions with actual labels on the **train set**. Run the same trained model on the train raster to get predicted masks, vectorize them, then compare **actual labels (left)** with **predicted (right)** in a side-by-side map. We also compute performance scores (IoU, precision, recall, F1) between predicted and actual building footprints on the train set.\n",
    ],
}

# Code cells for Ex8 (from the removed block, with first cell fixed for num_classes/num_channels)
code1 = """# Run inference on the TRAIN raster (same model) to get predictions we can compare with actual labels
train_masks_path = f"{BASE_DIR}/outputs/train_instance_masks.tif"
import gc
geoai.instance_segmentation(
    input_path=train_raster_path,
    output_path=train_masks_path,
    model_path=model_path,
    num_classes=2,
    num_channels=3,
    window_size=WINDOW_SIZE,
    overlap=OVERLAP,
    batch_size=BATCH_SIZE,
    confidence_threshold=0.5,
)
gc.collect()
print("Train set inference complete. Masks saved to:", train_masks_path)"""

ex8_code1 = {"cell_type": "code", "metadata": {}, "outputs": [], "execution_count": None, "source": [line + "\n" for line in code1.split("\n")]}
if ex8_code1["source"]:
    ex8_code1["source"][-1] = ex8_code1["source"][-1].rstrip("\n")

ex8_rest = [cells[i] for i in range(5, 9)]  # vectorize, load actual, side-by-side, metrics (indices 5,6,7,8 in original)
ex8_cells = [ex8_md, ex8_code1] + ex8_rest

nb["cells"] = cells_new[:idx9] + ex8_cells + cells_new[idx9:]
with open(path, "w", encoding="utf-8") as f:
    json.dump(nb, f, indent=1, ensure_ascii=False)
print("Done: removed duplicate Ex8 from top, inserted Ex8 block before Ex9")
