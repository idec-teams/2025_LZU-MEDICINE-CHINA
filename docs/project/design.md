# Design

## Overview

This project aims to develop an intelligent engineered bacterium for the precise treatment of perioperative gut microbiota dysbiosis. Using the safe Lactobacillus casei as the chassis, we have integrated a multifunctional genetic circuit. First, by introducing the accA and OLE1 genes, the engineered bacterium can synthesize and release oleic acid—beneficial for gut barrier repair—under the specific regulation of the bile salt-responsive promoter P16090. Simultaneously, the bacterium expresses the antimicrobial peptide defensin DEFB4A to precisely suppress opportunistic pathogens. To ensure biosafety, we designed a bile salt-responsive Hok/Sok toxin-antitoxin "kill switch" system, controlled by the same P16090 promoter. This mechanism ensures that the engineered bacterium only colonizes the gut; any leakage into the external environment triggers its automatic clearance. Together, this living therapeutic platform is equipped with functions for barrier repair, pathogen suppression, and self-regulation, setting a new standard for targeted, safe, and intelligent interventions.

## Chassis Cells

We chose Lactobacillus casei as the chassis cell. As a well-studied and widely used probiotic in the food industry, Lactobacillus casei has been granted "Generally Recognized as Safe" (GRAS) status. Its long history of colonization and metabolism in the human gut establishes a solid foundation for its inherent safety as a live therapeutic agent, significantly reducing potential risks in clinical applications. Moreover, in comparison to many gut symbiotic bacteria that are challenging to genetically modify, Lactobacillus casei benefits from a relatively well-characterized and mature genetic background. A variety of molecular tools, including constitutive and inducible promoters, reporter systems, efficient plasmid transformation methods, and homologous recombination techniques, are already available for this strain, further enhancing the feasibility of constructing the engineered bacterium.

## Module 1: Lipid Metabolism and Oleic Acid Secretion

In this section, our goal is to enhance the lipid metabolism capacity of the engineered bacteria, enabling them to synthesize and secrete oleic acid in the intestinal environment. This is intended to promote the repair of intestinal epithelial cell membranes and maintain the integrity of the mucosal barrier. To achieve this, we have designed two core genes and one inducible promoter system. The short-chain fatty acid synthesis gene (accA) is derived from Lactobacillus species. Research has demonstrated that this gene can enhance the activity of propionyl-CoA carboxylase, thereby increasing the production of short-chain fatty acids (SCFAs), including acetate and propionate.

![Vector system expressing accA](https://static.igem.wiki/teams/5562/project-figure/4.webp)

**Figure 4. Vector system expressing accA**

Another key gene is OLE1, derived from Saccharomyces cerevisiae (baker's yeast), which encodes a Δ9-fatty acyl-CoA desaturase. This enzyme is capable of converting short- and medium-chain saturated fatty acids (such as acetate and propionate) into oleic acid (C18:1).

The inducible promoter system is derived from the Lactobacillus P16090 promoter, which specifically responds to bile salts. When the engineered bacteria enter the bile salt-rich intestinal environment, the promoter is activated, precisely controlling the expression of accA and OLE1. This inducible mechanism ensures that oleic acid synthesis occurs exclusively within the intestine, preventing systemic side effects and enhancing the biosafety of the engineered bacteria.

![Vector system expressing OLE1](https://static.igem.wiki/teams/5562/project-figure/5.webp)

**Figure 5. Vector system expressing OLE1**

## Module 2: Defensin Secretion and Immune Regulation

Regulating the gut microbiota balance solely through metabolic byproducts is limited. For disrupted intestinal barriers and the overgrowth of pathogenic bacteria, engineered probiotics need to possess more powerful functions. After extensive research and literature review, our team identified a naturally occurring short peptide in the gut, defensin, as the focus of our modification strategy. Defensin is a key effector molecule in the host's innate immune system, exhibiting broad-spectrum and highly efficient antimicrobial activity, with particularly strong targeted inhibition of opportunistic pathogens like Gram-negative bacteria.

![Vector system expressing OLE1 and DEFB4A](https://static.igem.wiki/teams/5562/project-figure/6.webp)

**Figure 6. Vector system expressing OLE1 and DEFB4A**

We integrated the human defensin DEFB4A gene into the genome of the engineered bacteria, enabling them to continuously express and secrete this active peptide. Complementing traditional metabolic regulation, the defensin module can directly and rapidly eliminate pathogens that abnormally proliferate due to antibiotic use, restoring microbial balance. Additionally, its unique membrane-perforating mechanism makes it difficult for pathogens to develop resistance. This design allows the engineered bacteria to not only "repair" the intestinal barrier through oleic acid synthesis but also actively "eliminate" threats, providing dual assurance of repair and defense. This dual functionality enhances the restoration of gut microbial homeostasis during the perioperative period.

## Module 3: Gut Environment-Based Biological Containment System

To ensure the biosafety of live bacterial therapy, we have designed a biological containment system specifically controlled by gut environmental signals. The core of this system is a bile salt-responsive promoter, P16090, which precisely regulates a Hok/Sok toxin-antitoxin mechanism. When the engineered bacteria establish residence in the bile salt-rich gut environment, the P16090 promoter is activated. This not only drives the expression of therapeutic genes but also suppresses the synthesis of the Hok toxin protein, allowing the engineered bacteria to survive and perform their therapeutic functions. However, if the engineered bacteria inadvertently escape into bile salt-deficient environments outside the gut or into in vitro settings, the P16090 promoter immediately becomes inactive. This leads to a rapid decline in Sok antitoxin levels, removing the suppression of the Hok toxin. This, in turn, triggers self-lysis of the bacteria.

This design effectively ties the survival of the bacteria to the specific gut environment, providing double-layered assurance for "in situ control and ex situ self-destruction." By preventing the survival and proliferation of bacteria outside the target environment, this system fundamentally eliminates the risk of environmental dissemination of foreign genes.

## References

[1] MARTINEZ-FERNANDEZ J A, BRAVO D, PEIROTEN A, et al. Bile-induced promoters for gene expression in Lactobacillus strains [J]. Appl Microbiol Biotechnol, 2019, 103(9): 3819-27.

[2] LANGA S, PEIROTEN A, ARQUES J L, et al. Catabolite responsive elements as a strategy for the control of heterologous gene expression in lactobacilli [J]. Appl Microbiol Biotechnol, 2021, 105(1): 225-33.

[3] PENG J, TRIPLETT L R, SCHACHTERLE J K, et al. Chromosomally Encoded hok-sok Toxin-Antitoxin System in the Fire Blight Pathogen Erwinia amylovora: Identification and Functional Characterization [J]. Appl Environ Microbiol, 2019, 85(15).

[4] KAWANO M. Divergently overlapping cis-encoded antisense RNA regulating toxin-antitoxin systems from E. coli: hok/sok, ldr/rdl, symE/symR [J]. RNA Biol, 2012, 9(12): 1520-1527.

