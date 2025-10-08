# Implementation

## Unresolved Status

Although the critical role of the gut microbiota during the perioperative period has increasingly become a consensus, effective clinical interventions to address microbiota dysbiosis remain scarce, representing a significant unmet need. Current mainstream microbiota modulators, such as broad-spectrum probiotics and prebiotics, often exhibit limitations due to their relatively simplistic mechanisms of action, low colonization efficiency in the complex and imbalanced gut environment, and inability to precisely target key pathological pathways, leading to inconsistent and limited efficacy. Fecal microbiota transplantation (FMT), while capable of reconstructing the microbiota composition, faces significant practical and safety challenges in the perioperative setting. These include complexities in donor screening, the risk of potential pathogen transmission, and strict ethical and regulatory barriers, all of which hinder its routine clinical application.

The more fundamental challenge lies in the "static" nature of existing strategies—delivering fixed strains or components regardless of dynamic changes in the gut environment—rendering them inadequate for on-demand, in situ, and precise therapies. Therefore, the development of an innovative therapy capable of intelligently sensing the gut environment, actively executing multifaceted restorative functions, and integrating stringent biosafety mechanisms has become an urgent need to overcome current challenges and advance perioperative management.

## Innovation Highlights

### Development of an Intelligent Live Biotherapeutic Platform

This project goes beyond traditional probiotic-based approaches by creating an "intelligent" therapeutic system capable of actively sensing and responding to pathological conditions in the gut. By introducing the bile salt-responsive promoter P16090 as a central regulatory switch, therapeutic functions of the engineered bacteria (e.g., oleic acid synthesis) and the biosafety system can be precisely activated in a spatiotemporal manner within the intestinal environment. This marks a paradigm shift from "static supplementation" to "dynamic regulation" in therapeutic strategies.

### Integration of Multimodal Synergistic Therapeutic Mechanisms

We have designed a synergistic "repair + eradication" strategy. On one hand, oleic acid is synthesized through the metabolic introduction of the *accA* and *OLE1* genes to restore the dysbiotic gut microbiota. On the other hand, the antimicrobial peptide defensin DEFB4A is simultaneously expressed to precisely inhibit opportunistic pathogens. This integration of multiple functionalities enables a comprehensive approach to the management of dysbiosis and its consequences, resulting in more robust therapeutic efficacy.

### Coupling of Therapeutic and Safety Genetic Circuits

The most distinctive innovation of this project lies in the deep coupling of therapeutic and safety logics. A single gut-specific signal (bile salts) is utilized to simultaneously regulate therapeutic genes and the safety switch, ensuring that the engineered bacteria's survival and functional execution are strictly confined to the target environment.

### Pioneering Application of Synthetic Biology in Clinical Therapeutics

This project serves as a successful demonstration of utilizing synthetic biology principles to address challenges in precision medicine. By reprogramming functional genes from different species (yeast and humans) into a probiotic chassis, we have created a highly engineered living system. This provides a replicable design framework and technical pathway for developing next-generation "living medicines" targeting complex diseases.

## Technical Approach

This project adheres strictly to the "Design-Build-Test-Learn" (DBTL) cycle principle, progressing through six core engineering cycles to construct and optimize engineered bacteria with both therapeutic functionality and biosafety features.

### Step 1: Establishing the Host Chassis and Preparing the Therapeutic Module

We began by ensuring that Lactobacillus casei chassis could tolerate at least 0.5% bile salt concentrations (Cycle 1), laying the foundation for metabolic engineering. Subsequently, we initiated the reconstruction of the core metabolic pathway. Using the strong constitutive promoter on the tightly regulated plasmid pMG36e, we overexpressed the accA gene, successfully increasing short-chain fatty acid production by several folds, providing sufficient precursors for downstream reactions (Cycle 2).

### Step 2: Implementing the Bile Salt-Responsive Mechanism

To enable precise control, we introduced and validated the bile salt-responsive promoter P16090, demonstrating its capacity to regulate downstream genes (e.g., GFP) in response to extracellular bile salt concentration gradients (Cycle 3). Building on this, we placed the codon-optimized OLE1 gene from Saccharomyces cerevisiae under the control of P16090, constructing engineered bacteria capable of efficiently synthesizing and secreting oleic acid in response to bile salt induction (Cycle 4).

### Step 3: Expanding Functional Modules for Synergistic Therapy

After establishing the oleic acid synthesis pathway, we expanded the therapeutic capability of the engineered bacteria. To simultaneously repair damaged intestinal barriers and inhibit pathogens, we designed a fusion expression unit. Here, the DEFB4A (defensin) gene was linked to OLE1 via a self-cleaving 2A peptide. Experimental results confirmed the correct co-expression of both proteins, with the culture supernatant of engineered bacteria exhibiting significant anti-inflammatory and oxidative stress-relief activity in cell models (Cycle 5).

### Step 4: Designing the Biosafety System

To ensure biosafety, we developed and integrated an environment-sensitive containment system (Cycle 6). Using the tightly regulated plasmid PIP501 as the backbone, we constructed a genetic circuit where the constitutive promoter Preca drives the expression of the toxin gene hok, while the bile salt-responsive promoter P16090 regulates the expression of the antitoxin gene sok. This design ensures that in the gut environment (with bile salts), sok neutralizes the toxicity of hok. However, if the engineered bacteria leak into an environment lacking bile salts, sok expression ceases, leading to the accumulation of hok, which eliminates the bacteria. Killing curve assays and live-dead staining experiments validated this system's efficient and reliable "survive in gut, self-destruct outside gut" functionality.

## Future Development Plan

The successful construction of this project has laid the foundation for engineered bacterial therapy; however, its eventual clinical translation requires systematic follow-up research. Future development plans will focus on three key dimensions: long-term safety validation, expansion of therapeutic functions, and the pathway to clinical implementation.

### Long-term Safety Validation

We will conduct long-term administration experiments in higher-level models to comprehensively assess the colonization and elimination trajectory of the engineered bacteria in complex, realistic intestinal environments, as well as their long-term ecological impact on the host's native microbiota. Critically, we will closely monitor the genetic stability of the Hok/Sok biosafety system under prolonged evolutionary pressure in vivo. Using deep sequencing technologies, we will detect any potential escape mutations and evaluate the risk of horizontal gene transfer to other gut microbes. This will provide indisputable safety data to support clinical applications.

### Function Expansion

We will explore the introduction of more diverse sensing and execution modules, such as intelligent circuits capable of responding to specific pathogen quorum sensing signals or inflammatory factors (e.g., TNF-α). This will enable the engineered bacteria to autonomously diagnose and precisely intervene in more complex intestinal disease states. Additionally, we plan to expand the therapeutic scope from solely addressing microbiota dysbiosis to targeting metabolic syndromes, thereby achieving a "one-bacterium-multiple-uses" diversified therapeutic framework.

### Clinical Translation

In terms of clinical implementation and industrial translation, the core task lies in addressing the challenges of transitioning from "technical feasibility" to "product usability." This includes developing stable and efficient engineered bacterial fermentation and lyophilization processes that comply with Good Manufacturing Practice (GMP) standards, as well as exploring suitable oral delivery formulations (e.g., acid-resistant capsules) to ensure that a sufficient number of viable bacteria can be precisely delivered to the intestine. We will initiate the design and promotion of investigator-initiated early clinical trials to preliminarily verify the safety and efficacy of the therapy in perioperative patients and work toward establishing communication mechanisms with regulatory authorities.

## Issues to Be Optimized

### Long-term and Real-World Risks of the Biosafety System

The currently constructed Hok/Sok safety switch has primarily been validated under laboratory conditions. Its ability to maintain absolutely reliable "self-destruction upon leaving the gut" functionality in the complex, evolutionarily pressured real environment of the animal intestine over the long term remains to be rigorously tested. The genetic stability and escape resistance of the system still require more stringent validation.

### Metabolic Burden Caused by Multiple Genetic Circuits

The introduction and continuous expression of exogenous genes (e.g., OLE1 and DEFB4A) may compete with the chassis cell's intrinsic life activities for transcription/translation resources and substrates. This could significantly impact the growth rate of the engineered bacteria, their colonization competitiveness in the gut, and the long-term stable expression of their core therapeutic functions.

### Challenges of Individual Differences on Therapeutic Consistency

Significant variations in bile salt concentrations, microbiota composition, and inflammatory states exist across patients. These differences may lead to individual variability in the activation level of the P16090 promoter and the output efficiency of subsequent therapeutic modules. This poses challenges in dose determination and generalizability, making it difficult to achieve stable and predictable clinical efficacy.

## References

[1] GUO P, WANG W, XIANG Q, et al. Engineered probiotic ameliorates ulcerative colitis by restoring gut microbiota and redox homeostasis [J]. Cell Host Microbe, 2024, 32(9): 1502-18 e9.

[2] SIDDIQUI R, MAKHLOUF Z, ALHARBI A M, et al. The Gut Microbiome and Female Health [J]. Biology (Basel), 2022, 11(11).

[3] LIU Q, CHENG L, WANG M, et al. Dietary sodium acetate and sodium butyrate improve high-carbohydrate diet utilization by regulating gut microbiota, liver lipid metabolism, oxidative stress, and inflammation in largemouth bass (Micropterus salmoides) [J]. J Anim Sci Biotechnol, 2024, 15(1): 50.

[4] MARTINEZ-FERNANDEZ J A, BRAVO D, PEIROTEN A, et al. Bile-induced promoters for gene expression in Lactobacillus strains [J]. Appl Microbiol Biotechnol, 2019, 103(9): 3819-27.

[5] LANGA S, PEIROTEN A, ARQUES J L, et al. Catabolite responsive elements as a strategy for the control of heterologous gene expression in lactobacilli [J]. Appl Microbiol Biotechnol, 2021, 105(1): 225-33.

