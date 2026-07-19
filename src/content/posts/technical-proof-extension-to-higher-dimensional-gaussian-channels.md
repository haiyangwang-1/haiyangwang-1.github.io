---
title: "Technical proof of the extension to higher-dimensional Gaussian channels"
date: "2026-07-19"
description: "A technical proof of a superlinear lower bound on the number of spherical shells in capacity-achieving inputs for amplitude-constrained vector Gaussian channels."
author: "Haiyang Wang"
draft: false
tags: ["information theory", "gaussian channels", "approximation theory"]
---

# Main result

Consider the amplitude-constrained vector Gaussian channel

$$
Y=X+Z,\qquad Z\sim\phi_d=N(0,I_d),\qquad \|X\|\le A,
$$

where the dimension $d\ge2$ is fixed. Write

$$
B_A=\{x\in\mathbb R^d:\|x\|\le A\}
$$

for the spatial input ball, and let $\mu_A$ be the uniform probability law on $B_A$. For $0\le r\le A$, let $s_r$ be the uniform probability law on the sphere $\{x:\|x\|=r\}$.

The capacity-achieving input distribution (CAID) is radially symmetric and is supported on finitely many concentric spheres. Thus it has the form

$$
\rho_A^*=\sum_{j=1}^{K_A}w_js_{r_j},\qquad w_j>0,\qquad \sum_{j=1}^{K_A}w_j=1.
$$

This structure, as well as the upper bound $K_A=O_d(A^2)$, is due to [Dytso, Yagli, Poor, and Shamai](https://arxiv.org/abs/1901.03264). In one dimension, $K_A$ counts atoms, whereas here it counts distinct spherical shells.

For any input law $\rho$ on $B_A$, let $p_\rho$ denote the Lebesgue density of the output law $\rho*\phi_d$:
$$
p_\rho(y)=\int_{B_A}\phi _d(y-x)\,d\rho(x), \qquad \phi_d(y)=\frac{1}{(2\pi)^{d/2}}\exp(-\|y\|^2/2)
$$


The main result of this note is the following fixed-dimensional asymptotic lower bound, extending the scalar AWGN result in our previous paper.

> **Theorem (shell-count lower bound).** For each fixed $d\ge2$, and sufficiently large $A$
>
> $$
> \boxed{K_A\gtrsim_d A\sqrt{\log A}}
> \tag{\text{Main result}}
> $$

The notation $f\gtrsim_d g$ means that $f\ge c_dg$ for some positive constant depending only on $d$.

# Proof of main result

## Outline of the proof
The proof and theory construction follow the same architecture as in the scalar channel, with the following correspondence:

| | Scalar channel | Vector channel |
| --- | --- | --- |
| Reference input | Uniform on $[-A,A]$ | Uniform on $B_A$ |
| CAID complexity | $K_A$ atoms | $K_A$ shells |
| Spectral analysis | Ordinary Fourier modes | Slepian modes separated into spherical harmonics |
| Approximation metric | $\chi^2$ of the outputs | $L^2$ norm of outputs' pdf |

The proof for the vector channel follows the same three steps as in the scalar case.


### Step 1: Jeffreys is near the CAID

The uniform law $\mu_A$ is the vector analogue of the scalar Jeffreys reference input. Its output is close to the optimal output in reverse KL divergence:

$$
\boxed{D(p_{\mu_A}\|p_{\rho_A^*})\lesssim_d\frac1A}
\tag{\text{Jeffreys--CAID}}
$$

### Step 2: Approximation lower bound

If $\rho$ is supported on only $K$ concentric shells, its output cannot approximate the Jeffreys output $p_{\mu_A}$ too well:

$$
\boxed{A^d\|p_\rho-p_{\mu_A}\|_2^2\gtrsim_d\exp\left(-c_d\frac{K^2}{A^2}\right),}\tag{\text{Approx. lower bound}}
$$
where the constant $c_d$ depends only on $d$.


### Step 3: Bridging Steps 1 and 2

For the two outputs of interest, reverse KL divergence controls their ordinary $L^2$ separation:

$$
\boxed{D(p_{\mu_A}\|p_{\rho_A^*})\gtrsim_d A^d\|p_{\rho_A^*}-p_{\mu_A}\|_2^2.}\tag{\text{Bridge}}
$$



### Sketch of the proof of the main result

Applying (Eq. Approx. lower bound), (Eq. Bridge), and (Eq. Jeffreys–CAID) gives
$$
\exp\left(-c_d\frac{K_A^2}{A^2}\right)
\quad \lesssim_d A^d\|p_{\rho_A^*}-p_{\mu_A}\|_2^2
\quad \lesssim_d D(p_{\mu_A}\|p_{\rho_A^*})
\quad \lesssim_d\frac1A
$$

Taking logarithms yields

$$
c_d\frac{K_A^2}{A^2}\ge\log A-O_d(1).
$$

For all sufficiently large $A$, this implies

$$
K_A\gtrsim_d A\sqrt{\log A},
$$

which is (Eq. Main result).


Step 2, the approximation theory lower bound, is the key difficulty. In the rest of the section, we prove it first, then we prove the more standard results of Steps 1 and 3.

## Approximation lower bound

### 3.1 Precise statement and conventions

For simplicity, fix $d\ge2$, take $A$ to be sufficiently large, and let

$$
\rho=\sum_{j=1}^K w_js_{r_j},\qquad 0\le r_j\le A,
$$

be a probability law supported on $K$ concentric shells. Throughout this section, $\lesssim$, $\gtrsim$, and $\asymp$ hide positive prefactors that depend only on $d$; we usually suppress the subscript $d$.

The goal is to prove (Eq. Approx. lower bound). The argument has three components:

1. construct about $\Omega^d$ bandlimited modes concentrated on the ball $B_A$;
2. show that one shell can populate only about $\Omega^{d-1}$ independent angular channels;
3. transfer the resulting rank defect through Gaussian convolution at cost of factor $\exp(c_d\Omega^2/A^2)$.

Choosing $\Omega\asymp K$ then gives the desired exponent.

### 3.2 Fourier setup and the projection kernel

We use the unitary Fourier transform

$$
\widehat f(\xi)=\frac{1}{(2\pi)^{d/2}}\int_{\mathbb R^d}e^{-i\xi\cdot x}f(x)\,dx.
$$

The spectral (frequency) radius $\Omega$ is a positive number, and we consider the space of bandlimited frequencies:
$$
B_\Omega=\{\xi\in\mathbb R^d:\|\xi\|\le\Omega\}
$$
and define the corresponding space of bandlimited functions
$$
PW_\Omega=\{f\in L^2(\mathbb R^d):\widehat f(\xi)=0\text{ for }\xi\notin B_\Omega\}.
$$

Thus $PW_\Omega$ is simply the space of functions with no frequencies larger than $\Omega$. Let $P_\Omega: L^2(\R^d)\to PW_{\Omega}$ be the projection:
$$
\widehat{P_\Omega f}=1_{B_\Omega}\widehat f.
$$

Fourier inversion shows that $P_\Omega$ is convolution with the kernel

$$
\mathcal K_\Omega(z)=\frac{1}{(2\pi)^d}\int_{B_\Omega}e^{i\xi\cdot z}\,d\xi,
$$

so that

$$
(P_\Omega f)(x)=\int_{\mathbb R^d}\mathcal K_\Omega(x-y)f(y)\,dy.
$$

> **Lemma (the Fourier–Bessel kernel).** Let $V_d=\pi^{d/2}/\Gamma(d/2+1)$ be the volume of the unit ball. For $z\ne0$,
>
> $$
> \mathcal K_\Omega(z)
> =(2\pi)^{-d/2}\Omega^d
> \frac{J_{d/2}(\Omega\|z\|)}{(\Omega\|z\|)^{d/2}},
> $$
>
> while
>
> $$
> \mathcal K_\Omega(0)=\frac{V_d}{(2\pi)^d}\Omega^d.
> $$
>
> Moreover, we have the estimate
>
> $$
> |\mathcal K_\Omega(z)|
> \lesssim\Omega^d(1+\Omega\|z\|)^{-(d+1)/2}.
> \tag{\text{Kernel decay}}
> $$

**Proof.** The displayed identity is the standard radial Fourier-transform formula for the indicator of a ball. For fixed order $\nu\ge0$, the Bessel function satisfies

$$
|J_\nu(t)|\le
\begin{cases}
\dfrac{(t/2)^\nu}{\Gamma(\nu+1)},&0<t\le1,\\[6pt]
C_\nu t^{-1/2},&t\ge1,
\end{cases}
$$
where $C_\nu > 0$ is a constant depending on $\nu$. The first line is [DLMF 10.14.4](https://dlmf.nist.gov/10.14.E4); the second follows from the fixed-order large-argument expansion [DLMF 10.17.3](https://dlmf.nist.gov/10.17.E3) together with its [real-argument error bound](https://dlmf.nist.gov/10.17.iii). Equivalently,

$$
|J_\nu(t)|\lesssim_\nu \frac{t^\nu}{(1+t)^{\nu+1/2}},\qquad t>0.
$$

Substituting $\nu=d/2$ and $t=\Omega\|z\|$ into the kernel formula proves (Eq. Kernel decay). $\square$

### 3.3 Slepian modes and the volume-order count

Let $M_{B_1}:L^2(\mathbb R^d)\to L^2(\mathbb R^d)$ denote multiplication by the indicator $1_{B_1}$. Define the concentration operator on $L^2(\mathbb R^d)$ by

$$
\mathcal C_\Omega=P_\Omega\circ M_{B_1}\circ P_\Omega.
$$

Both $P_\Omega$ and $M_{B_1}$ are self-adjoint, so $\mathcal C_\Omega$ is self-adjoint. Its range lies in $PW_\Omega$, and its restriction to $PW_\Omega$ is the integral operator

$$
(\mathcal C_\Omega f)(x)=\int_{B_1}\mathcal K_\Omega(x-y)f(y)\,dy.
$$

On $PW_\Omega$, this is a compact self-adjoint operator. Its nonzero spectrum consists of a countable sequence

$$
1>\lambda_1\ge\lambda_2\ge\cdots>0,
\qquad
\lambda_\alpha\longrightarrow0,
$$

with globally orthonormal eigenfunctions $\{\psi_\alpha\}_{\alpha\in\mathbb N}\subset PW_\Omega$ satisfying

$$
\mathcal C_\Omega\psi_\alpha=\lambda_\alpha\psi_\alpha,
\qquad
\int_{\mathbb R^d}\psi_\alpha(x)\overline{\psi_\beta(x)}\,dx=\delta_{\alpha\beta}.
$$

These are the Slepian modes. This standard spectral description goes back to the time- and frequency-limiting theory of [Landau and Widom](https://doi.org/10.1016/0022-247X(80)90241-3); see also the ball-based exposition of [Khalid, Kennedy, and McEwen](https://arxiv.org/abs/1403.5553).

The rank argument below needs many directions on which $\mathcal C_\Omega$ acts non-negligibly. We therefore count its dominant modes.

> **Definition (dominant Slepian modes).** Define dominant modes of $\mathcal C_\Omega$ to be:
>
> $$
> \mathcal I_\Omega=\{\alpha\in\mathbb N:\lambda_\alpha\ge1/2\}.
> $$
>
> $N_\Omega=|\mathcal I_\Omega|$ is the number of dominant Slepian modes.

We now count these modes.

> **Lemma 1 (volume-order dominant-mode count).** For sufficiently large $\Omega$,
>
> $$
> N_\Omega\asymp\Omega^d.
> \tag{\text{Mode count}}
> $$

**Proof.**

Firstly, recall the following useful fact. If an integral operator $T$ has square-integrable kernel $t(x,y)$, then
$$
\|T\|_{\mathrm{HS}}^2
=\int\!\!\int |t(x,y)|^2\,dx\,dy,
\qquad
\operatorname{Tr}(T^*T)=\|T\|_{\mathrm{HS}}^2.
$$


Set $R_\Omega=M_{B_1}P_\Omega$,
which has the kernel  $r_\Omega(x,y)=1_{B_1}(x)\mathcal K_\Omega(x-y)$,
then $\mathcal C_\Omega=R_\Omega^*R_\Omega$.
Therefore,
$$
\begin{aligned}
\sum_\alpha\lambda_\alpha
&=\operatorname{Tr}(\mathcal C_\Omega)
=\operatorname{Tr}(R_\Omega^*R_\Omega)\\
&=\|R_\Omega\|_{\mathrm{HS}}^2\\
&=\int_{B_1}\int_{\mathbb R^d}|\mathcal K_\Omega(x-y)|^2\,dy\,dx
\\
&=\int_{B_1} (2\pi)^{-d}|B_\Omega| \,dx
=\frac{V_d^2}{(2\pi)^d}\Omega^d.
\end{aligned}
$$
where we used Plancherel to calculate $\|\mathcal K_{\Omega}\|^2$.

Secondly,
$$
\begin{aligned}
\sum_{\alpha\ge1}\lambda_\alpha^2
&=\operatorname{Tr}\bigl( \mathcal C_\Omega \mathcal C_\Omega \bigr)
= \operatorname{Tr}\bigl( R_\Omega^* R_\Omega R_\Omega^* R_\Omega \bigr)
= \operatorname{Tr}\bigl( R_\Omega R_\Omega^* R_\Omega R_\Omega^*\bigr)
\\
&=\|R_\Omega R_\Omega^*\|_{\mathrm{HS}}^2\\
&=\int_{B_1}\int_{B_1}|\mathcal K_\Omega(x-y)|^2\,dy\,dx.
\end{aligned}
$$
where we used the following facts
- multiplicative rotational invariance of trace
- $R_\Omega R_\Omega^*$ is a self-adjoint integral operator with kernel
  $$1_{B_1}(x)\mathcal K_\Omega(x-y)1_{B_1}(y)$$





Thirdly, subtracting the two identities gives
$$
\begin{aligned}
\sum_{\alpha\ge1}\lambda_\alpha(1-\lambda_\alpha)
&=\sum_{\alpha\ge1}\lambda_\alpha-\sum_{\alpha\ge1}\lambda_\alpha^2\\
&=\int_{B_1}\int_{B_1^c}|\mathcal K_\Omega(x-y)|^2\,dy\,dx \\
\end{aligned}
$$
Applying (Eq. Kernel decay) and writing $z=y-x$, we obtain

$$
\sum_{\alpha\ge1}\lambda_\alpha(1-\lambda_\alpha)
\lesssim \Omega^{2d}\int_{\mathbb R^d}(1+\Omega\|z\|)^{-(d+1)}m(z)\,dz,
$$

where
$m(z)=\bigl|\{x\in B_1:x+z\notin B_1\}\bigr|$
is the volume pushed outside $B_1$ by translation through $z$, which admits the following elementary upper bound:
$$
m(z)\lesssim\min\{1,\|z\|\}.
$$
This allows us to derive the upper bound
$$
\sum_{\alpha\ge1}\lambda_\alpha(1-\lambda_\alpha)
\lesssim \Omega^{d-1} \log (2+\Omega)
$$


Lastly, combining all previous estimates, we have
$$
\begin{aligned}
\Omega^d
& \asymp \sum_{\alpha}\lambda_\alpha  \\
& = \sum_{\text{dominant }\alpha}\lambda_\alpha + \sum_{\text{non-dominant }\alpha}\lambda_\alpha  \\
& \le \sum_{\text{dominant }\alpha}\lambda_\alpha + \sum_{\text{non-dominant }\alpha} 2\lambda_\alpha(1-\lambda_\alpha) \\
& \lesssim N_\Omega + \Omega^{d-1} \log (2+\Omega)
\end{aligned}
$$
which leads to the dominant mode count $N_\Omega \asymp \Omega^d$.


### 3.4 Spherical harmonics and the surface-order count

The preceding count uses only volume. To see what a single sphere can contribute, we must separate radial and angular behavior.

Every nonzero $x\in\mathbb R^d$ can be written as

$$
x=r\theta,\qquad r=\|x\|,\qquad \theta=\frac{x}{\|x\|}\in S^{d-1}.
$$

Here $r$ is a scalar radius and $\theta$ is a direction on the unit sphere. In $d=2$, $\theta$ can be represented by one ordinary angle; in higher dimensions it is a point of $S^{d-1}$.

A degree-$\ell$ spherical harmonic is the restriction to $S^{d-1}$ of a homogeneous harmonic polynomial of degree $\ell$. Let $\mathcal H_{\ell,d}$ be the space of these functions and choose an orthonormal basis:
$$
\{Y_{\ell,m}:1\le m\le h_{\ell,d}\},
$$
where the dimension is $h_{\ell,d}=\dim\mathcal H_{\ell,d}=\binom{\ell+d-1}{\ell}-\binom{\ell+d-3}{\ell-2}$.

See [Frye and Efthimiou](https://arxiv.org/abs/1205.3548) more details on general dimension spherical harmonics.


> **Proposition (separation of the Slepian modes).** For every $(\ell,m)$, the subspace
>
> $$
> \mathcal V_{\ell,m}
> =\left\{R(r)Y_{\ell,m}(\theta):R\in L^2\bigl((0,\infty),r^{d-1}dr\bigr)\right\}\cap PW_\Omega
> $$
>
> is preserved by $\mathcal C_\Omega$. The restriction of $\mathcal C_\Omega$ to this subspace is the same radial operator for every $m$ at fixed $\ell$. Consequently, the Slepian eigenfunctions can be chosen in the separated form
>
> $$
> \psi_{\ell,m,k}(r\theta)=R_{\ell,k}(r)Y_{\ell,m}(\theta),
> $$
>
> with eigenvalue $\lambda_{\ell,k}$ independent of $m$.

**Proof.** Take $f(s\varphi)=R(s)Y_{\ell,m}(\varphi)\in\mathcal V_{\ell,m}$, where $s\ge0$ and $\varphi\in S^{d-1}$. The integral formula for the concentration operator gives

$$
(\mathcal C_\Omega f)(r\theta)
=\int_0^1\int_{S^{d-1}}
\mathcal K_\Omega(r\theta-s\varphi)R(s)Y_{\ell,m}(\varphi)
s^{d-1}\,d\varphi\,ds.
$$

Because $\mathcal K_\Omega$ is radial,

$$
\mathcal K_\Omega(r\theta-s\varphi)
=F_{r,s}(\theta\cdot\varphi),
\qquad
F_{r,s}(t)=\mathcal K_\Omega\!\left(\sqrt{r^2+s^2-2rst}\right).
$$

The [Funk--Hecke theorem](https://link.springer.com/book/10.1007/BFb0094775) states that integration against any kernel depending only on $\theta\cdot\varphi$ acts diagonally on spherical harmonics. Hence

$$
\int_{S^{d-1}}F_{r,s}(\theta\cdot\varphi)Y_{\ell,m}(\varphi)\,d\varphi
=a_{\ell,\Omega}(r,s)Y_{\ell,m}(\theta),
$$

where the scalar $a_{\ell,\Omega}(r,s)$ depends on $\ell$ but not on $m$. Substitution into the concentration integral gives

$$
(\mathcal C_\Omega f)(r\theta)
=Y_{\ell,m}(\theta)
\int_0^1a_{\ell,\Omega}(r,s)R(s)s^{d-1}\,ds.
$$

Thus $\mathcal C_\Omega$ preserves $\mathcal V_{\ell,m}$ and acts there through the radial integral operator

$$
(T_{\ell,\Omega}R)(r)
=\int_0^1a_{\ell,\Omega}(r,s)R(s)s^{d-1}\,ds,
$$

which is independent of $m$. Because $\mathcal C_\Omega$ is self-adjoint and $\mathcal V_{\ell,m}$ is invariant, its orthogonal complement is invariant as well; hence the restriction is self-adjoint. It is also compact, so the spectral theorem supplies radial eigenfunctions $R_{\ell,k}$ of $T_{\ell,\Omega}$. Finally, the spherical harmonics form a complete orthonormal basis of $L^2(S^{d-1})$, so the eigenbases of these radial sectors combine into a separated Slepian eigenbasis. The three-dimensional version of this Fourier--Bessel separation for Slepian concentration on a ball is also developed by [Khalid, Kennedy, and McEwen](https://arxiv.org/abs/1403.5553). $\square$

The proposition asserts that a separated eigenbasis can be chosen. An arbitrary eigenfunction obtained by mixing separated modes with the same eigenvalue need not itself be separated. The indices have distinct roles: $\ell$ is the angular degree, $m$ selects one angular basis function at that degree, and $k$ enumerates radial eigenfunctions within the same angular channel.

Let

$$
\mathcal A_\Omega
=\{(\ell,m):\lambda_{\ell,k}\ge1/2\text{ for at least one }k\},
\qquad
H_\Omega=|\mathcal A_\Omega|.
$$

Thus $N_\Omega$ counts all retained triples $(\ell,m,k)$, whereas $H_\Omega$ counts each active angular pair $(\ell,m)$ only once.

> **Lemma 2 (surface-order angular count).** For all sufficiently large $\Omega$,
>
> $$
> H_\Omega\lesssim\Omega^{d-1}.
> \tag{\text{Angular count}}
> $$

**Proof.** Fix $(\ell,m)$ and write

$$
\nu=\frac d2-1,
\qquad
\alpha=\ell+\nu.
$$

We first compute the sum of the eigenvalues in this angular sector. The same Funk--Hecke formula used in the preceding proposition gives the Fourier--Bessel identity

$$
\widehat{R(r)Y_{\ell,m}(\theta)}(\varpi\omega)
=(-i)^\ell Y_{\ell,m}(\omega)\varpi^{-\nu}
\int_0^\infty R(r)J_\alpha(r\varpi)r^{\nu+1}\,dr.
$$

Consequently, after identifying the $(\ell,m)$ sector with its radial coefficient, the map that takes a frequency-limited function to its restriction to $B_1$ has kernel

$$
b_{\ell,\Omega}(r,\varpi)
=i^\ell 1_{[0,1]}(r)1_{[0,\Omega]}(\varpi)
(r\varpi)^{-\nu}J_\alpha(r\varpi)
$$

with respect to the radial measures $r^{d-1}dr$ and $\varpi^{d-1}d\varpi$. As in the trace computation of Lemma 1, the sum of the sector eigenvalues is the squared Hilbert--Schmidt norm of this restriction map. Therefore

$$
S_{\ell,\Omega}:=\sum_k\lambda_{\ell,k}
=\int_0^1\int_0^\Omega J_\alpha(r\varpi)^2r\varpi\,d\varpi\,dr.
$$

In particular, if the $(\ell,m)$ sector is active, then one of its eigenvalues is at least $1/2$, and hence $S_{\ell,\Omega}\ge1/2$.

It remains to show that this is impossible when $\ell$ is much larger than $\Omega$. From the power series for $J_\alpha$, followed by the triangle inequality,

$$
\begin{aligned}
|J_\alpha(t)|
&\le\frac{(t/2)^\alpha}{\Gamma(\alpha+1)}
\sum_{j=0}^\infty\frac{(t^2/4)^j}{j!(\alpha+1)^j}\\
&=\frac{(t/2)^\alpha}{\Gamma(\alpha+1)}
\exp\left(\frac{t^2}{4(\alpha+1)}\right).
\end{aligned}
$$

Here we used $\Gamma(\alpha+j+1)\ge\Gamma(\alpha+1)(\alpha+1)^j$. The elementary Stirling bound $\Gamma(\alpha+1)\ge(\alpha/e)^\alpha$ then gives

$$
|J_\alpha(t)|
\le\left(\frac{et}{2\alpha}\right)^\alpha
\exp\left(\frac{t^2}{4(\alpha+1)}\right).
$$

Suppose $\alpha\ge4\Omega$. Throughout the sector-trace integral, $0\le t=r\varpi\le\Omega$, so

$$
\frac{et}{2\alpha}\le\frac e8,
\qquad
\frac{t^2}{4(\alpha+1)}\le\frac{\alpha}{64}.
$$

Thus, with $q=(e/8)e^{1/64}<1$, we have $|J_\alpha(t)|\le q^\alpha$ uniformly for $0\le t\le\Omega$. Substituting this into the trace formula yields

$$
S_{\ell,\Omega}
\le q^{2\alpha}\int_0^1\int_0^\Omega r\varpi\,d\varpi\,dr
=\frac{\Omega^2}{4}q^{2\alpha}.
$$

For sufficiently large $\Omega$, the right-hand side is less than $1/2$ whenever $\alpha\ge4\Omega$. Hence an active angular degree must satisfy $\ell+\nu<4\Omega$, and in particular $\ell\lesssim\Omega$.

Let $L$ be the largest active degree. Using the formula for $h_{\ell,d}$ and summing the binomial coefficients gives

$$
\sum_{\ell=0}^L h_{\ell,d}
=\binom{L+d-1}{d-1}+\binom{L+d-2}{d-1}
\lesssim_d(1+L)^{d-1}.
$$

Since $L\lesssim\Omega$, we conclude that

$$
H_\Omega\le\sum_{\ell=0}^Lh_{\ell,d}\lesssim\Omega^{d-1},
$$

which proves (Eq. Angular count). $\square$

### 3.5 Normalized features on the input ball

For each retained Slepian mode, define

$$
f_\alpha(x)=\sqrt{\frac{V_d}{\lambda_\alpha}}\,\psi_\alpha(x),
\qquad
f_\alpha^{(A)}(x)=f_\alpha(x/A).
$$

Let $F_A(x)$ be the column vector whose entries are the $N_\Omega$ retained functions $f_\alpha^{(A)}(x)$.

> **Lemma 3 (normalization and energy bounds).** The retained features have the following properties:
>
> 1. they are orthonormal under $\mu_A$;
> 2. their Fourier transforms are supported in $B_{\Omega/A}$;
> 3. for every coefficient vector $a\in\mathbb C^{N_\Omega}$,
>
> $$
> \int_{\mathbb R^d}|a^*F_A(x)|^2\,dx\lesssim A^d\|a\|^2;
> $$
>
> 4. uniformly in $x$,
>
> $$
> \|F_A(x)\|^2\lesssim\Omega^d.
> $$

**Proof.** On $B_1$ the Slepian eigenvalue identity gives

$$
\int_{B_1}\psi_\alpha(x)\overline{\psi_\beta(x)}\,dx
=\lambda_\alpha\delta_{\alpha\beta}.
$$

The chosen normalization therefore makes the $f_\alpha$ orthonormal for uniform probability on $B_1$, and the change of variables $x=Au$ proves orthonormality of $f_\alpha^{(A)}$ under $\mu_A$.

Scaling a function by $x\mapsto x/A$ contracts its Fourier support from $B_\Omega$ to $B_{\Omega/A}$, proving the second property. Global orthonormality of the $\psi_\alpha$ and $\lambda_\alpha\ge1/2$ give

$$
\int_{\mathbb R^d}|a^*F_A(x)|^2\,dx
=V_dA^d\sum_{\alpha\in\mathcal I_\Omega}\frac{|a_\alpha|^2}{\lambda_\alpha}
\le2V_dA^d\|a\|^2.
$$

Finally, every $f\in PW_\Omega$ satisfies $f(x)=\langle f,\mathcal K_\Omega(x-\cdot)\rangle$. Applying Bessel's inequality to this evaluation formula gives

$$
\sum_{\alpha\in\mathcal I_\Omega}|\psi_\alpha(x/A)|^2
\le\mathcal K_\Omega(0).
$$

Multiplying by $V_d/\lambda_\alpha\le2V_d$ yields

$$
\|F_A(x)\|^2\le2V_d\mathcal K_\Omega(0)\lesssim\Omega^d.
$$

$\square$

### 3.6 One shell has only surface-order rank

For a probability law $\rho$ on $B_A$, define its feature covariance matrix

$$
T_\Omega(\rho)=\int_{B_A}F_A(x)F_A(x)^*\,d\rho(x).
$$

Orthonormality under the uniform ball gives

$$
T_\Omega(\mu_A)=I_{N_\Omega}.
$$

Now fix one shell radius $r_0$. On the sphere $x=r_0\theta$, a separated feature has the form

$$
f_{\ell,m,k}^{(A)}(r_0\theta)=a_{\ell,k}(r_0)Y_{\ell,m}(\theta),
$$

where $a_{\ell,k}(r_0)$ contains the radial value and the normalization. Angular orthogonality makes $T_\Omega(s_{r_0})$ block diagonal in $(\ell,m)$. Inside one such block, the entry indexed by $(k,k')$ is

$$
a_{\ell,k}(r_0)\overline{a_{\ell,k'}(r_0)},
$$

which is an outer product and therefore has rank at most one. By (Eq. Angular count), there are only $H_\Omega\lesssim\Omega^{d-1}$ active angular blocks, so

$$
\operatorname{rank}T_\Omega(s_{r_0})\le H_\Omega\lesssim\Omega^{d-1}.
$$

For a mixture of $K$ shells, subadditivity of rank gives

$$
\operatorname{rank}T_\Omega(\rho)\lesssim K\Omega^{d-1}.\tag{2}
$$

Choose $\Omega=\kappa_dK$, where the fixed dimensional factor $\kappa_d$ is large enough. Combining (Eq. Mode count) and (Eq. 2) then yields

$$
\operatorname{rank}T_\Omega(\rho)\le\frac12N_\Omega.
$$

Let

$$
\Delta_\Omega=T_\Omega(\rho)-I_{N_\Omega}.
$$

This is precisely the Frobenius-norm case of the Eckart--Young--Mirsky theorem. If $r=\operatorname{rank}T_\Omega(\rho)\le N_\Omega/2$, then every rank-$r$ approximation to the identity satisfies

$$
\begin{aligned}
\|\Delta_\Omega\|_F^2
&=\|T_\Omega(\rho)-I_{N_\Omega}\|_F^2\\
&\ge\sum_{j=r+1}^{N_\Omega}\sigma_j(I_{N_\Omega})^2
=N_\Omega-r\\
&\ge\frac12N_\Omega
\gtrsim\Omega^d.
\end{aligned}\tag{3}
$$

Here every singular value $\sigma_j(I_{N_\Omega})$ equals $1$. Equivalently, $T_\Omega(\rho)$ has a null space of dimension at least $N_\Omega/2$, and $\Delta_\Omega$ acts as $-I$ on that null space. This is the vector analogue of the scalar Toeplitz rank defect.

### 3.7 Transfer through Gaussian smoothing

The matrix defect concerns expectations of functions of the input. We now build a test function that reads the same defect from the output density.

For a Hermitian matrix $M$, define the quadratic feature

$$
u_M(x)=F_A(x)^*MF_A(x).
$$

Lemma 3 implies

$$
\|u_M\|_2^2
\le\left(\sup_x\|F_A(x)\|^2\right)
\int_{\mathbb R^d}\|MF_A(x)\|^2\,dx
\lesssim A^d\Omega^d\|M\|_F^2.\tag{4}
$$

Every entry of $F_A$ is bandlimited to $B_{\Omega/A}$. Products of two such entries are therefore bandlimited to $B_{2\Omega/A}$, so

$$
\operatorname{supp}\widehat u_M\subseteq B_{2\Omega/A}.
$$

Convolution with the Gaussian law $\phi_d$ multiplies the Fourier transform by $e^{-\|\xi\|^2/2}$. Define $h_M$ by reversing this multiplier on the finite frequency ball:

$$
\widehat h_M(\xi)=e^{\|\xi\|^2/2}\widehat u_M(\xi).
$$

Because $\widehat u_M$ vanishes outside $B_{2\Omega/A}$, Plancherel and (Eq. 4) give

$$
\|h_M\|_2^2
\lesssim A^d\Omega^d
\exp\left(\frac{4\Omega^2}{A^2}\right)\|M\|_F^2.\tag{5}
$$

By construction, $h_M*\phi_d=u_M$. Using the symmetry of the Gaussian density and Fubini's theorem,

$$
\int_{\mathbb R^d}h_M(y)\bigl(p_\rho(y)-p_{\mu_A}(y)\bigr)\,dy
=\int_{B_A}u_M(x)\,d(\rho-\mu_A)(x).
$$

The right-hand side is the Frobenius inner product $\langle M,\Delta_\Omega\rangle_F=\operatorname{tr}(M^*\Delta_\Omega)$. Take $M=\Delta_\Omega$. Cauchy–Schwarz, (Eq. 3), and (Eq. 5) yield

$$
\begin{aligned}
\|p_\rho-p_{\mu_A}\|_2^2
&\ge\frac{\|\Delta_\Omega\|_F^4}{\|h_{\Delta_\Omega}\|_2^2}\\
&\gtrsim\frac{\|\Delta_\Omega\|_F^2}{A^d\Omega^d}
\exp\left(-\frac{4\Omega^2}{A^2}\right)\\
&\gtrsim\frac1{A^d}
\exp\left(-c_d\frac{K^2}{A^2}\right).
\end{aligned}
$$

The last line uses $\Omega=\kappa_dK$. Multiplying by $A^d$ proves (Eq. Approx. lower bound).

## 4. Step 1: Jeffreys is near the CAID

Let $\mathsf C_d(A)$ be the channel capacity. For any input law $\rho$ on $B_A$, the capacity-achieving output satisfies the stability identity

$$
I_\rho(X;Y)+D(p_\rho\|p_{\rho_A^*})
=\int_{B_A}D(\phi_d(\cdot-x)\|p_{\rho_A^*})\,d\rho(x)
\le\mathsf C_d(A).
$$

The final inequality is the KKT inequality for the CAID. Taking $\rho=\mu_A$ gives

$$
D(p_{\mu_A}\|p_{\rho_A^*})
\le\mathsf C_d(A)-I_{\mu_A}(X;Y).
$$

Monotonicity of entropy under independent Gaussian convolution gives

$$
I_{\mu_A}(X;Y)
\ge\log(V_dA^d)-\frac d2\log(2\pi e).
$$

The vector capacity upper bound of [Thangaraj, Kramer, and Böcherer](https://arxiv.org/abs/1511.08742) has the high-amplitude form

$$
\mathsf C_d(A)
\le\log\left(\frac{V_dA^d}{(2\pi e)^{d/2}}+O_d(A^{d-1})\right).
$$

Subtracting the mutual-information lower bound gives

$$
D(p_{\mu_A}\|p_{\rho_A^*})
\lesssim\log\left(1+\frac1A\right)
\lesssim\frac1A,
$$

which proves (Eq. Jeffreys–CAID).

## 5. Step 3: bridging Steps 1 and 2

We next show that the reverse KL divergence in Step 1 controls the $L^2$ distance in Step 2. The key fact is that both output densities have height of order at most $A^{-d}$.

For the uniform input,

$$
p_{\mu_A}(y)
=\frac1{V_dA^d}\int_{B_A}\phi_d(y-x)\,dx
\le\frac1{V_dA^d}.
$$

The optimal output requires a little more work. In the argument below, inequalities between symmetric matrices are understood in the quadratic-form sense.

> **Lemma 4 (height of the optimal output).** The CAID output satisfies
>
> $$
> \|p_{\rho_A^*}\|_\infty\le\frac{e^d}{V_dA^d}.
> $$

**Proof.** For a Gaussian mixture, differentiation under the integral gives the score and Hessian identities

$$
\nabla\log p_{\rho_A^*}(y)=\mathbb E[X^*\mid Y=y]-y,
$$

and

$$
\nabla^2\log p_{\rho_A^*}(y)
=\operatorname{Cov}(X^*\mid Y=y)-I_d.
$$

Let $y_0$ maximize $p_{\rho_A^*}$ and write $M_A=p_{\rho_A^*}(y_0)$. At $y_0$, the score vanishes and the Hessian is negative semidefinite, hence

$$
\mathbb E[X^*\mid Y=y_0]=y_0,
\qquad
\operatorname{Cov}(X^*\mid Y=y_0)\le I_d.
$$

The conditional mean-square distance from $y_0$ is therefore at most $d$, so the support of $\rho_A^*$ contains a point $x_0$ satisfying $\|x_0-y_0\|^2\le d$. The Hessian identity also gives $\nabla^2\log p_{\rho_A^*}\ge-I_d$ everywhere. Integrating this lower curvature bound away from the maximizer yields

$$
\log p_{\rho_A^*}(y)
\ge\log M_A-\frac12\|y-y_0\|^2.
$$

The KKT equality at the support point $x_0$ is

$$
\mathbb E\log p_{\rho_A^*}(x_0+Z)
=-\mathsf C_d(A)-h(Z).
$$

Using the preceding quadratic lower bound and $\mathbb E\|Z\|^2=d$ gives

$$
-\mathsf C_d(A)-h(Z)\ge\log M_A-d.
$$

Finally,

$$
\mathsf C_d(A)
\ge I_{\mu_A}(X;Y)
\ge\log(V_dA^d)-h(Z),
$$

and the claimed bound on $M_A$ follows. $\square$

We now use a general comparison between KL divergence, Hellinger distance, and $L^2$ distance. For densities $p$ and $q$, define

$$
H^2(p,q)=\int_{\mathbb R^d}(\sqrt p-\sqrt q)^2.
$$

If both densities are bounded by $B$, then

$$
\|p-q\|_2^2
=\int(\sqrt p-\sqrt q)^2(\sqrt p+\sqrt q)^2
\le4B H^2(p,q).
$$

On the other hand, Jensen's inequality gives

$$
\begin{aligned}
D(q\|p)
&=-2\int q\log\sqrt{p/q}\\
&\ge-2\log\int\sqrt{pq}\\
&\ge2\left(1-\int\sqrt{pq}\right)
=H^2(p,q).
\end{aligned}
$$

Apply these inequalities with $q=p_{\mu_A}$, $p=p_{\rho_A^*}$, and $B=e^d/(V_dA^d)$. We obtain

$$
D(p_{\mu_A}\|p_{\rho_A^*})
\ge H^2(p_{\rho_A^*},p_{\mu_A})
\gtrsim A^d\|p_{\rho_A^*}-p_{\mu_A}\|_2^2,
$$

which proves (Eq. Bridge).


### Remarks on dimension-dependent constants

The notation $\lesssim_d$ and $\gtrsim_d$ hides multiplicative constants depending only on the fixed dimension. They enter through the volume $V_d$, the vector capacity bound, the multiplicities of spherical harmonics, the Bessel estimates, and the choice of the proportionality factor in $\Omega\asymp K$.

The exponent constant $c_d$ is displayed because changing it changes the scale of $K_A^2/A^2$ and cannot be absorbed into an outside prefactor. No attempt is made here to optimize this constant or to obtain a bound uniform in growing dimension. The statement is asymptotic in $A$ for each fixed $d$.

## 7. Conclusion

The proof can be summarized by the chain

$$
\boxed{
\text{few shells}
\Longrightarrow
\text{low angular rank}
\Longrightarrow
\text{spectral defect}
\Longrightarrow
\text{output separation}.
}
$$

The Slepian modes provide volume-order many probes of the ball, while a single spherical shell can activate only surface-order many angular channels. Choosing the spectral radius proportional to the number of shells creates the missing directions that survive Gaussian smoothing strongly enough to contradict near-optimality unless $K_A$ has the asserted size.

## References

- A. Dytso, S. Yagli, H. V. Poor, and S. Shamai, [*The Capacity Achieving Distribution for the Amplitude Constrained Additive Gaussian Channel: An Upper Bound on the Number of Mass Points*](https://arxiv.org/abs/1901.03264).
- A. Thangaraj, G. Kramer, and G. Böcherer, [*Capacity Bounds for Discrete-Time, Amplitude-Constrained, Additive White Gaussian Noise Channels*](https://arxiv.org/abs/1511.08742).
- H. J. Landau and H. Widom, [*Eigenvalue Distribution of Time and Frequency Limiting*](https://doi.org/10.1016/0022-247X(80)90241-3).
- C. Müller, [*Spherical Harmonics*](https://link.springer.com/book/10.1007/BFb0094775), Chapter 9 (Funk--Hecke formula).
- Z. Khalid, R. A. Kennedy, and J. D. McEwen, [*Slepian Spatial-Spectral Concentration on the Ball*](https://arxiv.org/abs/1403.5553).
- C. Frye and C. J. Efthimiou, [*Spherical Harmonics in $p$ Dimensions*](https://arxiv.org/abs/1205.3548).
