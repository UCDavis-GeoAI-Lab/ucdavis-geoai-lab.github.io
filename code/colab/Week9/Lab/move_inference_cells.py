# Move "Print inference parameters" and "After inference" from Ex6 to Ex5
import json

path = "Lab9_GeoAI_with_answers.ipynb"
with open(path, "r", encoding="utf-8") as f:
    nb = json.load(f)

cells = nb["cells"]

# Find cells by content
def find_code(src_list, *substrings):
    s = "".join(src_list)
    return all(x in s for x in substrings)

print_config_cell = None
after_inference_cell = None
paths_cell_idx = None
run_inference_idx = None

for i, c in enumerate(cells):
    src = c.get("source", [])
    if c.get("cell_type") != "code":
        continue
    s = "".join(src)
    if "Print inference parameters" in s and "Inference configuration" in s:
        print_config_cell = (i, c)
    if "After inference:" in s and "Visualization is in Exercise 7" in s:
        after_inference_cell = (i, c)
    if "masks_path =" in s and "model_path =" in s and "BASE_DIR" in s:
        paths_cell_idx = i
    if "geoai.instance_segmentation" in s and "test_raster_path" in s and "masks_path" in s:
        run_inference_idx = i

if not all([print_config_cell, after_inference_cell, paths_cell_idx is not None, run_inference_idx is not None]):
    print("Could not find all cells", print_config_cell, after_inference_cell, paths_cell_idx, run_inference_idx)
    raise SystemExit(1)

# Insert print config after paths (index paths_cell_idx + 1)
# Insert after inference after run inference (index run_inference_idx + 1)
# Then remove the two cells from Ex6 (indices will shift)
idx_print = print_config_cell[0]
idx_after = after_inference_cell[0]
# Order: remove higher index first so lower doesn't shift
remove_indices = sorted([idx_print, idx_after], reverse=True)
# Build new cell list: insert after paths and after run_inference, then remove the two
cells_new = list(cells)
# Insert after run_inference first (so we don't shift run_inference)
cells_new.insert(run_inference_idx + 1, after_inference_cell[1])
# Now run_inference_idx is still correct; paths_cell_idx still correct. Insert after paths.
cells_new.insert(paths_cell_idx + 1, print_config_cell[1])
# Remove the two original cells (indices shifted: if idx_print < idx_after, after insert both shifted by 2;
# and we inserted at paths+1 and run+1, so print was at idx_print, after at idx_after.
# After inserting at paths+1, everything from paths+2 onward shifted by 1. So idx_print became idx_print+1 if idx_print > paths_cell_idx, else print_config is now at paths+1 and original is at idx_print+1.
# This is getting messy. Let me do: 1) find and remove the two cells (by value/content), 2) find paths and run indices in the resulting list, 3) insert at the right places.
cells_no_ex6_prints = [c for i, c in enumerate(cells) if i != idx_print and i != idx_after]
# Now find paths_cell_idx and run_inference_idx in cells_no_ex6_prints (indices change)
paths_cell_idx_new = None
run_inference_idx_new = None
for i, c in enumerate(cells_no_ex6_prints):
    s = "".join(c.get("source", []))
    if "masks_path =" in s and "model_path =" in s and "BASE_DIR" in s:
        paths_cell_idx_new = i
    if "geoai.instance_segmentation" in s and "test_raster_path" in s and "masks_path" in s:
        run_inference_idx_new = i
cells_new = list(cells_no_ex6_prints)
cells_new.insert(paths_cell_idx_new + 1, print_config_cell[1])
# After first insert, run_inference index may have shifted
run_after_first = run_inference_idx_new + 1 if run_inference_idx_new >= paths_cell_idx_new else run_inference_idx_new
cells_new.insert(run_after_first + 1, after_inference_cell[1])
nb["cells"] = cells_new
with open(path, "w", encoding="utf-8") as f:
    json.dump(nb, f, indent=1, ensure_ascii=False)
print("Moved inference print cells from Ex6 to Ex5")
