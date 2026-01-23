# Midterm Sample Questions - Folder Organization

This directory contains sample questions for the ABT HYD 182 midterm exam.

## Folder Structure

```
midterm/
├── original/                          # Original sample questions
│   ├── Moghimi_ABT_HYD_182_midterm_sample_questions_with_answers.docx
│   └── Moghimi_ABT_HYD_182_midterm_sample_questions_with_answers.md
│
├── question_sets/                     # New question sets (Markdown format)
│   ├── Sample_Questions_Set_1.md
│   ├── Sample_Questions_Set_1_with_Answers.md
│   ├── Sample_Questions_Set_2.md
│   └── Sample_Questions_Set_2_with_Answers.md
│
├── docx/                              # Converted .docx files
│   ├── Sample_Questions_Set_1.docx
│   ├── Sample_Questions_Set_1_with_Answers.docx
│   ├── Sample_Questions_Set_2.docx
│   └── Sample_Questions_Set_2_with_Answers.docx
│
├── scripts/                           # Conversion scripts
│   ├── convert_docx.py                # Converts .docx to .md
│   └── markdown_to_docx.py           # Converts .md to .docx
│
└── README.md                          # This file
```

## File Descriptions

### Original Files
- **Moghimi_ABT_HYD_182_midterm_sample_questions_with_answers.docx**: Original Word document with sample questions
- **Moghimi_ABT_HYD_182_midterm_sample_questions_with_answers.md**: Converted markdown version of the original

### Question Sets
Each set contains 20 multiple-choice questions covering:
- Python basics
- Data structures (lists, tuples, dictionaries, sets)
- Control flow (if/else, loops)
- Functions
- List comprehensions
- String operations
- Pandas DataFrames

**Files:**
- `Sample_Questions_Set_1.md` - Question set 1 (without answers)
- `Sample_Questions_Set_1_with_Answers.md` - Question set 1 (with answers marked)
- `Sample_Questions_Set_2.md` - Question set 2 (without answers)
- `Sample_Questions_Set_2_with_Answers.md` - Question set 2 (with answers marked)

### Converted .docx Files
Word document versions of all question sets, automatically generated from markdown files.

## Scripts

### convert_docx.py
Converts `.docx` files to `.md` format.

**Usage:**
```bash
python scripts/convert_docx.py [input_file.docx]
```

### markdown_to_docx.py
Converts `.md` files to `.docx` format.

**Usage:**
```bash
# Convert all files in question_sets folder
python scripts/markdown_to_docx.py --batch

# Convert a specific file
python scripts/markdown_to_docx.py question_sets/Sample_Questions_Set_1.md -o docx/output.docx
```

## Notes

- All question sets follow the same format and cover the same knowledge domain
- Questions 16-20 in each set are more challenging but not marked as such
- Correct answers in answer files are marked with **bold** text and a ✓ checkmark
- Both markdown and .docx formats are available for flexibility
