# Welcome to iGEM 2025 LZU-MEDICINE-CHINA

## Project Overview

Perioperative gut dysbiosis and its associated digestive disorders are widespread, yet no standardized therapeutic strategies have been implemented. Our project leverages synthetic biology to engineer bacteria capable of intelligently sensing the gut environment and precisely executing dual therapeutic functions: "repairing the gut barrier" (via oleic acid synthesis) and "inhibiting pathogenic bacteria" (via defensin secretion).

Innovatively, we have coupled these therapeutic genetic circuits with a bile salt-responsive Hok/Sok biosafety system, controlled by the same intestinal signal. This design fundamentally addresses the critical risk of environmental dissemination of foreign genes in live bacterial therapy by achieving "gut-specific survival and extra-gut self-destruction" through precise spatial control. This breakthrough provides a new paradigm for standardized treatments of perioperative digestive disorders, offering an intelligent and modularized therapeutic strategy that combines safety, efficacy, and precision.

![Project Banner](https://static.igem.wiki/teams/5562/logo/1.webp)

## Wet Lab Highlights

### Probiotics for Improving Gut Metabolic and Immune Balance

Oleic acid is a prebiotic that is relatively scarce in the gut environment. For the first time, using optimized fatty acid metabolic circuit design, we have engineered probiotics capable of secreting oleic acid. Additionally, we coupled the oleic acid secretion module with a bile acid-responsive promoter, ensuring its function is strictly limited to the gut environment.

Furthermore, we integrated a stable genetic and expression module for defensin into the engineered probiotics. This design not only improves the gut's metabolic environment through oleic acid secretion but also provides dual therapeutic functions: pathogen clearance and immune barrier enhancement. This innovative combination of metabolic and immune regulatory modules offers a comprehensive approach to restoring gut homeostasis and strengthening its defense mechanisms.

### Gut-Environment-Constrained Safety System

We have developed an intelligent biosafety system based on gut environmental signals, centered on a bile salt-responsive promoter, P16090, which precisely regulates the Hok/Sok toxin-antitoxin mechanism. The innovation of this system lies in coupling the survival of engineered bacteria with specific gut environmental signals. When the engineered bacteria colonize the bile salt-rich gut environment, the P16090 promoter is activated, driving the expression of therapeutic genes while suppressing the synthesis of the Hok toxin, thereby ensuring the bacteria can perform their therapeutic functions. However, if the engineered bacteria accidentally escape into bile salt-deficient environments outside the gut, the P16090 promoter is immediately deactivated, resulting in a drop in Sok antitoxin levels, which removes the inhibition of the Hok toxin and triggers rapid bacterial self-lysis.

This "survive in the gut, perish outside the gut" dual-layer design provides a robust safety barrier for live bacterial therapies, effectively addressing the core risk of foreign gene dissemination and setting a new standard for environmental biosafety.

### Multiple Innovative Parts

| Part Name        | Type        | Description                                                                                                         |
|------------------|-------------|---------------------------------------------------------------------------------------------------------------------|
| BBa_25CA4F5T     | Coding      | Encodes stearoyl-CoA 9-desaturase (OLE1), catalyzes stearic acid to oleic acid; codon-optimized for L. lactis.      |
| BBa_25ZF6KGL     | Coding      | Encodes accA, enhances fatty acid synthesis, increases short-chain fatty acids for oleic acid production.           |
| BBa_25S2TG5Z     | Promoter    | Bile salt-responsive promoter (P16090) from Lactobacillus, regulates gene expression in response to bile salts.     |
| BBa_25VPY4CG     | Coding      | Encodes defensin DEFB4A, antimicrobial peptide from human genome, expressed in engineered bacteria.                 |
| BBa_25NBMOAR     | Measurement | Synthetic sequence (P16090-RBS-OLE1-2AA-DEFB4A-Terminator), enables bile salt-induced expression of OLE1/DEFB4A.   |
| BBa_251CFLR3     | Plasmid     | Plasmid backbone PIP501 from Enterococcus faecium, used for biosafety system construction in various microorganisms. |

## Human Practices

### Education

We have developed a comprehensive plan for conducting educational initiatives. By precisely targeting four core groups—spanning from basic education institutions (schools) and grassroots communities/urban settings to the national strategic level and even a global perspective—we will advance educational efforts in a phased manner. This ensures that the light of science reaches every corner where it is needed.

![Education](https://static.igem.wiki/teams/5562/logo/1.webp)

![Education](https://static.igem.wiki/teams/5562/logo/2.webp)

### Entrepreneurship

We revolves around the theme of "Digestive Health, Overall Wellness," with a focus on gut microecology interventions, undertaking multidimensional efforts. During the initial research and exploration phase, the team identified the issues of gut microbiota imbalance and the limitations of traditional treatments through clinical medical observations, and combined these insights with the challenges of probiotic products to establish the "Gut Health Guardian" engineered probiotic strain project.

![Entrepreneurship](https://static.igem.wiki/teams/5562/logo/3.webp)

### Inclusivity

Our inclusive work aims to popularize knowledge about intestinal health, synthetic biology, and promote the fair access to medical resources. Through innovative educational and practical activities, we have made considerable efforts to narrow the gap in health literacy between urban and rural areas, among low-income groups, disadvantaged groups, and ethnic minority regions.

![Inclusivity](https://static.igem.wiki/teams/5562/logo/4.webp)

### Sustainability

As a therapy track team, our team has conducted a one-by-one analysis of the UN Sustainable Development Goals to assess the direct and indirect links between our projects and these goals, which will help future therapy track teams to closely integrate sustainability content with their own projects following our practice.

### Collaboration

Our team has carried out communication with many partner schools, companies and social organizations and achieved remarkable communication results. We believe that this will encourage other teams to actively carry out communication and make synthetic biology shine on this earth.
