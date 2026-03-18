# Final Sample Questions - Folder Organization

This directory contains sample questions for the ABT182 Advanced GIS final exam.

## Folder Structure

```
Final/
├── Orginal/                              # Original sample questions (source)
│   └── ABT182_sample_questions_for_final.docx
│
├── original/                             # Converted markdown of original
│   └── ABT182_sample_questions_for_final.md
│
├── question_sets/                        # New question sets (Markdown format)
│   ├── Sample_Questions_Set_1.md
│   ├── Sample_Questions_Set_1_with_Answers.md
│   ├── Sample_Questions_Set_2.md
│   └── Sample_Questions_Set_2_with_Answers.md
│
├── docx/                                 # Converted .docx files
│   ├── Sample_Questions_Set_1.docx
│   ├── Sample_Questions_Set_1_with_Answers.docx
│   ├── Sample_Questions_Set_2.docx
│   └── Sample_Questions_Set_2_with_Answers.docx
│
├── scripts/                              # Conversion scripts
│   ├── convert_docx.py                   # Converts .docx to .md
│   └── markdown_to_docx.py               # Converts .md to .docx (or use Pandoc)
│
└── README.md                             # This file
```

## File Descriptions

### Original Files
- **ABT182_sample_questions_for_final.docx**: Original Word document with sample questions
- **ABT182_sample_questions_for_final.md**: Converted markdown version of the original

### Question Sets
Each set contains 15 multiple-choice questions and 5 short-answer questions covering:
- Remote sensing (spatial, spectral, temporal, radiometric resolution)
- Machine learning (classification, regression, clustering)
- Neural networks and deep learning
- Zonal statistics
- Python GIS libraries (rasterio, rasterstats, ArcPy)
- Vegetation indices (NDVI, NDRE)
- ArcGIS integration and ArcGIS Notebooks

**Files:**
- `Sample_Questions_Set_1.md` - Question set 1 (without answers)
- `Sample_Questions_Set_1_with_Answers.md` - Question set 1 (with answers marked)
- `Sample_Questions_Set_2.md` - Question set 2 (without answers)
- `Sample_Questions_Set_2_with_Answers.md` - Question set 2 (with answers marked)

### Converted .docx Files
Word document versions of all question sets, generated from markdown files using Pandoc.

## Conversion

To convert markdown to .docx using Pandoc:
```powershell
& "C:\Program Files\Pandoc\pandoc.exe" input.md -o output.docx
```

## Notes

- All question sets follow the same format and cover the same knowledge domain
- Questions 11-15 in each set are slightly more challenging
- Correct answers in answer files are marked with **bold** text and a ✓ checkmark
- Both markdown and .docx formats are available for flexibility
