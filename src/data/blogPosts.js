export const blogPosts = [
  {
    slug: "pytest-coverage-guide",
    title: "Mastering Code Quality with Pytest Coverage",
    date: "March 2024",
    description:
      "A comprehensive guide to implementing and maintaining high test coverage using pytest, with practical examples and best practices.",
    readTime: "10 min read",
    content: `
Testing is a crucial aspect of maintaining reliable software. In Python, pytest combined with coverage reporting provides powerful tools to ensure your code is thoroughly tested. Let's dive into how to implement and maintain high test coverage in your Python projects.

## What is Test Coverage?

Test coverage, also known as code coverage, is a metric that measures the percentage of your source code executed during testing. It helps identify:

  - Untested code paths
  - Dead code
  - Potential edge cases
  - Areas needing more test attention

### Types of Coverage Metrics

1. **Statement Coverage**
   - Measures which lines of code were executed
   - Simplest form of coverage
   - _Example_: Ensuring each line runs at least once

2. **Branch Coverage**
   - Tracks decision points (if/else, loops)
   - More thorough than statement coverage
   - _Example_: Testing both \`if\` and \`else\` paths

3. **Function Coverage**
   - Verifies if each function was called
   - Important for API testing
   - _Example_: Ensuring all methods are tested

4. **Condition Coverage**
   - Tests individual boolean expressions
   - Important for complex conditions
   - _Example_: Testing \`and\`/\`or\` combinations

## Setting Up Pytest with Coverage

First, install the necessary packages:

\`\`\`bash
pip install pytest pytest-cov
\`\`\`

### Understanding Coverage Requirements

Before diving into code, consider these key aspects:

1. **Minimum Coverage Threshold**
   - Set realistic goals (e.g., 80-90%)
   - Gradually increase over time
   - Balance coverage with maintenance cost

2. **Critical Path Coverage**
   - Identify business-critical code
   - Ensure 100% coverage for crucial paths
   - Focus on error-prone areas

3. **Edge Case Coverage**
   - Test boundary conditions
   - Handle unexpected inputs
   - Verify error scenarios

Let's use a practical example. Consider this simple calculator module:

\`\`\`python:calculator.py
class Calculator:
    def add(self, a: float, b: float) -> float:
        return a + b

    def divide(self, a: float, b: float) -> float:
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b

    def multiply(self, a: float, b: float) -> float:
        return a * b

    def subtract(self, a: float, b: float) -> float:
        return a - b

    def power(self, base: float, exponent: int) -> float:
        """
        Calculate base raised to the power of exponent.
        Handles negative exponents and edge cases.
        """
        if not isinstance(exponent, int):
            raise TypeError("Exponent must be an integer")

        if base == 0 and exponent < 0:
            raise ValueError("Cannot raise zero to a negative power")

        return base ** exponent
\`\`\`

Here's how to write comprehensive tests:

\`\`\`python:test_calculator.py
import pytest
from calculator import Calculator

class TestCalculator:
    @pytest.fixture
    def calculator(self):
        return Calculator()

    def test_add(self, calculator):
        assert calculator.add(2, 3) == 5
        assert calculator.add(-1, 1) == 0
        assert calculator.add(0.1, 0.2) == pytest.approx(0.3)

    def test_divide(self, calculator):
        assert calculator.divide(6, 2) == 3
        assert calculator.divide(5, 2) == 2.5

        with pytest.raises(ValueError, match="Cannot divide by zero"):
            calculator.divide(1, 0)

    def test_multiply(self, calculator):
        assert calculator.multiply(2, 3) == 6
        assert calculator.multiply(-2, 3) == -6
        assert calculator.multiply(0, 5) == 0

    def test_subtract(self, calculator):
        assert calculator.subtract(5, 3) == 2
        assert calculator.subtract(1, 1) == 0
        assert calculator.subtract(-1, -1) == 0

    def test_power_basic(self, calculator):
        assert calculator.power(2, 3) == 8
        assert calculator.power(3, 2) == 9
        assert calculator.power(5, 0) == 1

    def test_power_negative_exponent(self, calculator):
        assert calculator.power(2, -2) == 0.25
        assert calculator.power(4, -1) == 0.25

    def test_power_edge_cases(self, calculator):
        # Test zero base
        assert calculator.power(0, 3) == 0
        assert calculator.power(0, 0) == 1

        # Test error cases
        with pytest.raises(ValueError, match="Cannot raise zero to a negative power"):
            calculator.power(0, -1)

        with pytest.raises(TypeError, match="Exponent must be an integer"):
            calculator.power(2, 2.5)
\`\`\`

### Advanced Testing Techniques

#### 1. Parametrized Tests

\`\`\`python
@pytest.mark.parametrize("base,exponent,expected", [
    (2, 3, 8),
    (3, 2, 9),
    (5, 0, 1),
    (2, -2, 0.25),
    (0, 3, 0),
])
def test_power_parametrized(calculator, base, exponent, expected):
    assert calculator.power(base, exponent) == expected
\`\`\`

#### 2. Property-Based Testing

\`\`\`python
from hypothesis import given, strategies as st

@given(
    st.integers(min_value=-100, max_value=100),
    st.integers(min_value=-100, max_value=100)
)
def test_add_properties(calculator, a, b):
    # Commutative property
    assert calculator.add(a, b) == calculator.add(b, a)

    # Identity property
    assert calculator.add(a, 0) == a

    # Associative property
    assert calculator.add(calculator.add(a, b), 0) == calculator.add(a, calculator.add(b, 0))
\`\`\`

## Modern Python Project Configuration

Modern Python projects use \`pyproject.toml\` as a centralized configuration file. Here's how to configure pytest and coverage settings:

\`\`\`toml:pyproject.toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "calculator"
version = "0.1.0"
description = "A simple calculator with test coverage example"
requires-python = ">=3.8"
dependencies = [
    "pytest>=7.0.0",
    "pytest-cov>=4.0.0",
]

[tool.pytest.ini_options]
minversion = "7.0"
addopts = """
    --cov=calculator
    --cov-report=term-missing
    --cov-report=html
    --cov-report=xml
    --cov-fail-under=90
"""
testpaths = ["tests"]

[tool.coverage.run]
branch = true
source = ["calculator"]
omit = [
    "tests/*",
    "setup.py",
]

[tool.coverage.report]
exclude_lines = [
    "pragma: no cover",
    "def __repr__",
    "if self.debug:",
    "raise NotImplementedError",
    "if __name__ == .__main__.:",
    "pass",
    "raise ImportError",
]

[tool.coverage.html]
directory = "coverage_html"

[tool.coverage.xml]
output = "coverage.xml"
\`\`\`

Let's break down the configuration:

### Pytest Configuration
- \`minversion\`: Ensures minimum pytest version
- \`addopts\`: Default command line options
  - \`--cov=calculator\`: Measures coverage for our package
  - \`--cov-report=term-missing\`: Shows missing lines in terminal
  - \`--cov-report=html\`: Generates HTML report
  - \`--cov-report=xml\`: Generates XML report for CI tools
  - \`--cov-fail-under=90\`: Fails if coverage is below 90%
- \`testpaths\`: Where to find test files

### Coverage Configuration
- \`tool.coverage.run\`: Basic coverage settings
  - \`branch = true\`: Enables branch coverage
  - \`source\`: Specifies what to measure
  - \`omit\`: Files to exclude
- \`tool.coverage.report\`: Reporting settings
  - \`exclude_lines\`: Patterns to exclude
- \`tool.coverage.html\`: HTML report settings
- \`tool.coverage.xml\`: XML report settings

## Running Tests with Coverage

With this configuration, simply run:

\`\`\`bash
pytest
\`\`\`

This will:
    1. Run all tests
    2. Generate coverage reports
    3. Show missing lines
    4. Create HTML and XML reports
    5. Fail if coverage is below 90%

## Understanding Coverage Reports

The coverage report shows:
    - Line coverage: Which lines were executed
    - Branch coverage: Which decision paths were taken
    - Missing lines: Code that wasn't executed during tests

Example coverage output:
\`\`\`bash
Name                 Stmts   Miss  Cover   Missing
--------------------------------------------------
calculator.py           12      0   100%
test_calculator.py      24      0   100%
--------------------------------------------------
TOTAL                  36      0   100%
\`\`\`

## Integration with CI/CD

Here's how to integrate with GitHub Actions:

\`\`\`yaml:.github/workflows/test.yml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.x'
          cache: 'pip'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -e ".[test]"

      - name: Run tests with coverage
        run: pytest

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage.xml
          fail_ci_if_error: true
\`\`\`

## Best Practices for Test Coverage

1. **Focus on Quality, Not Just Quantity**
   - High coverage doesn't guarantee good tests
   - Write meaningful assertions
   - Test edge cases and error conditions

2. **Maintain Coverage Over Time**
   - Add tests for new features
   - Update tests when modifying code
   - Don't let coverage decrease

3. **Use Coverage Reports Effectively**
   - Review uncovered lines
   - Understand why code is not covered
   - Decide if uncovered code needs tests

4. **Structure Tests Well**
   - One test file per source file
   - Clear test names and organization
   - Use fixtures for common setup

5. **Handle Edge Cases**
   - Test boundary conditions
   - Include error cases
   - Verify exception messages

## Common Pitfalls to Avoid

1. **Focusing Only on Percentage**
   - Coverage percentage is just one metric
   - Quality of tests matters more
   - Understand what's not covered and why

2. **Ignoring Branch Coverage**
   - Test both if and else paths
   - Cover all logical branches
   - Test loop conditions

3. **Writing Tests Just for Coverage**
   - Tests should verify behavior
   - Don't write meaningless tests
   - Focus on business logic

4. **Not Testing Error Handling**
   - Test exception cases
   - Verify error messages
   - Check boundary conditions

## Conclusion

Pytest coverage is a powerful tool for maintaining code quality. Using \`pyproject.toml\` for configuration provides a clean, centralized way to manage your project's test settings. Remember that coverage is just one metric - combine it with good testing practices, code reviews, and continuous integration for the best results.

## Key takeaways:
    - Use \`pyproject.toml\` for modern Python project configuration
    - Set meaningful coverage thresholds
    - Write quality tests, not just high coverage
    - Integrate with CI/CD for automated checks
    - Review and maintain coverage over time

**Remember**: The goal isn't 100% coverage, but rather meaningful tests that help maintain and improve code quality.
`,
  },
  // ... other blog posts
];
