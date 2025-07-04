# Poland 2025 Presidential Election Analysis

Interactive visualization of statistical anomalies detected in Poland's 2025 presidential runoff election, based on the research by Krzysztof Kontek.

## Overview

This website presents the findings of a statistical analysis that examined 31,631 polling stations across Poland to detect potential irregularities in the June 1, 2025 presidential runoff between Karol Nawrocki and Rafał Trzaskowski.

## Key Findings

- **Official margin**: 369,591 votes
- **Detected anomalies**: 3,679-5,453 polling stations (11.6%-17.2%)
- **Estimated impact**: 315,256-457,624 vote shift
- **Conclusion**: Statistical anomalies could have influenced the election outcome

## Methodology

The analysis uses Median Absolute Deviation (MAD) detection within geographically clustered groups of polling stations to identify four types of anomalies:
1. Excessive support for one candidate
2. Abnormal vote growth between rounds
3. Outcome reversals against local trends
4. Implausible vote drops for the opposing candidate

## Development

```bash
npm install
npm run dev
```

## Credits

Based on the research paper: "Reassessing Poland's 2024 Presidential Runoff: Using Spatially-Grouped MAD Detection to Recalculate the Result" by Krzysztof Kontek.
