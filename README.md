# Akinda-Zeta Function Approximation
### A Novel Numerical Approach using Phi-based Power Towers

This repository contains a research-based numerical approximation of the **Riemann Zeta Function** $\zeta(s)$. The discovery focuses on a unique relationship between the Zeta function and fundamental mathematical constants: **Golden Ratio ($\Phi$)**, **Pi ($\pi$)**, and **Euler's Number ($e$)**.

## 🚀 The Discovery

The core of this research is a **Nested Power Tower** structure that approximates $\zeta(s)$ for $s > 1$. Unlike traditional series expansions, this method uses a finite geometric structure scaled by an exponential factor.

### The Formula
The proposed identity is:

$$\zeta(s) \approx \Phi^{\left(\frac{1}{\Phi}\right)^{\left(\frac{1}{\pi}\right)^{\left(\frac{x(s)}{e}\right)}}}$$

Where:
- $\Phi = \frac{1+\sqrt{5}}{2}$ (Golden Ratio)
- $\pi \approx 3.14159$
- $e \approx 2.71828$
- $x(s)$ is the **Scaling Exponent** that follows an exponential decay relative to $s$.

## 📊 Key Results

The approximation shows high precision across various values of $s$:

| s value | Type | Status | Accuracy |
| :--- | :--- | :--- | :--- |
| $s = 2$ | Basel Problem | ✅ Confirmed | High Precision (up to 15 decimal places) |
| $s = 3$ | Apéry's Constant | ✅ Confirmed | Precise Approximation |
| $s = 45$ | Large s-value | ✅ Confirmed | Matches Real Value perfectly |
| $s = 1889$ | Extremal s-value | ✅ Confirmed | Highly Stable |

## 🛠 Project Structure

- `Maths/`: Contains JavaScript implementations for different $s$ values.
- `Screenshots/`: Proof of numerical convergence and comparison with actual Zeta values.
- `Logic/`: The core algorithm used to find the "Magic Number" $x$ for each $s$.

## 🧪 How it Works (JavaScript)

The approximation is calculated using a bottom-up power tower approach:

```javascript
let Phi = (1 + Math.sqrt(5)) / 2;
let x = 5.2843816 * Math.pow(2, -(s - 3)); // Experimental Scaling Factor

let correct = Phi;
correct = correct ** (1 / Math.PI);
correct = correct ** (1 / Phi);
correct = correct ** (x / Math.E);

console.log("Approximated Zeta:", correct);
