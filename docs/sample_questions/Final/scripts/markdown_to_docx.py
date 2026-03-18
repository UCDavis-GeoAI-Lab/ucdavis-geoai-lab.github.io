"""
Script to convert markdown files to .docx using Pandoc
Usage: python markdown_to_docx.py [--batch]
"""
import subprocess
import sys
from pathlib import Path

PANDOC_PATH = r"C:\Program Files\Pandoc\pandoc.exe"


def convert_md_to_docx(md_path, docx_path=None):
    """Convert a single markdown file to docx using Pandoc."""
    md_path = Path(md_path)
    if not md_path.exists():
        raise FileNotFoundError(f"File not found: {md_path}")

    if docx_path is None:
        docx_path = md_path.with_suffix('.docx')
    else:
        docx_path = Path(docx_path)

    docx_path.parent.mkdir(parents=True, exist_ok=True)

    result = subprocess.run(
        [PANDOC_PATH, str(md_path), "-o", str(docx_path)],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        raise RuntimeError(f"Pandoc failed: {result.stderr}")

    print(f"Converted {md_path.name} -> {docx_path.name}")
    return docx_path


if __name__ == "__main__":
    script_dir = Path(__file__).parent
    final_dir = script_dir.parent
    question_sets_dir = final_dir / "question_sets"
    docx_dir = final_dir / "docx"

    if "--batch" in sys.argv or len(sys.argv) == 1:
        md_files = list(question_sets_dir.glob("*.md"))
        if not md_files:
            print(f"No .md files found in {question_sets_dir}")
            sys.exit(1)

        for md_file in md_files:
            output_file = docx_dir / md_file.with_suffix('.docx').name
            try:
                convert_md_to_docx(md_file, output_file)
            except Exception as e:
                print(f"Error: {e}")
                sys.exit(1)

        print(f"\nAll conversions complete! Files saved to: {docx_dir}")
    else:
        input_file = Path(sys.argv[1])
        output_file = Path(sys.argv[2]) if len(sys.argv) > 2 else None
        convert_md_to_docx(input_file, output_file)
