# Project Description

## Background

The gut microbiota is the largest micro-ecosystem in the human body, playing essential roles in digestion, immunity, endocrine regulation, and neural modulation. It not only participates in the breakdown and absorption of nutrients but also remotely regulates the host's physiological state through multiple pathways such as the "gut-brain axis" and the "gut-liver axis." In healthy individuals, the microbiota maintains a dynamic balance, with different microbial communities constraining and cooperating with one another, functioning like a highly sophisticated ecological system. **However, this delicate balance is highly susceptible to external disturbances, among which surgical procedures and related interventions are major factors disrupting the microbiota equilibrium.**

The perioperative period, marked by rapid physiological changes, is a critical stage often accompanied by significant disturbances in the internal environment. Factors such as preoperative fasting, prophylactic use of antibiotics, effects of anesthesia, surgical trauma-induced stress, and postoperative administration of analgesics collectively create a "multifaceted assault" on the gut microbiota. For example, the use of broad-spectrum antibiotics, while effectively preventing surgical site infections, inevitably suppresses the growth of numerous beneficial microbes, creating opportunities for opportunistic pathogens to thrive. Meanwhile, systemic inflammatory responses and sympathetic activation induced by surgical trauma lead to reduced intestinal blood flow and damage to the mucosal barrier, exacerbating the disruption of the microbial community, and turn affect the host's immune regulation and energy metabolism.

![Changes in Gut Microbiota Across Different Stages](https://static.igem.wiki/teams/5562/project-figure/1.webp)

**Figure 1. Changes in Gut Microbiota Across Different Stages**

When the stability of the gut microbiota is disrupted, its consequences often extend beyond the local environment, impacting multiple systemic functions and leading to a wide range of diseases. Examples include inflammatory bowel disease (IBD), Crohn's disease, and irritable bowel syndrome (IBS). Furthermore, a dysbiotic microbiota may influence the functional state of the central nervous system through pathways such as the vagus nerve and immune cell migration. This disruption has been potentially linked to the development of neurological complications such as postoperative delirium and cognitive dysfunction.

![Incidence of various systemic diseases during the perioperative period](https://static.igem.wiki/teams/5562/project-figure/2.webp)

**Figure 2. Incidence of various systemic diseases during the perioperative period**

Currently, intervention strategies for perioperative gut microbiota dysbiosis exhibit significant limitations. Traditional microbiome-based formulations, such as probiotics and prebiotics, have shown some potential in clinical applications. However, their efficacy is often inconsistent due to factors such as strain selection, colonization resistance, and individual variability. While fecal microbiota transplantation (FMT) can achieve a more thorough reconstruction of the microbiota, its application in the perioperative setting is hindered by challenges related to ethics, safety, and practicality. More importantly, these approaches are largely limited to passive supplementation or overall replacement, lacking the capacity for precise regulation of specific pathological processes. This makes it challenging to achieve efficient and orderly microbial restoration within the complex environment of surgical stress.

Therefore, we have designed the **"Gut Health Guardian"** project, aiming to develop a functionally robust and biologically safe engineered probiotic. This probiotic is intended to rapidly occupy the ecological niches of missing beneficial bacteria when gut microbiota dysbiosis occurs and to produce prebiotics that are otherwise deficient in the gut. Additionally, it will repair the mucosal barrier and restore the functional balance of the gut microbiota. This innovative approach will serve as a model therapeutic strategy for addressing perioperative digestive system disorders.

## Introduction

Our project aims to develop a synthetic biology-based bioreactor leveraging *Lactobacillus casei* to precisely address perioperative gut microbiota dysbiosis and its associated pathological changes. The core design philosophy revolves around constructing a multifunctional, self-regulating engineered bacterium capable of intelligently executing three key tasks within the complex gut environment: "repairing the mucosal barrier, suppressing pathogenic bacteria, and ensuring safety."

![Fatty acid synthesis pathway](https://static.igem.wiki/teams/5562/project-figure/3.webp)

**Figure 3. Fatty acid synthesis pathway**

We selected Lactobacillus casei, known for its excellent probiotic properties, as the chassis cell and genetically engineered it to enhance its therapeutic functions. First, to strengthen the intestinal barrier, we introduced two key metabolic genes. The first is the accA gene derived from Lactobacillus, which enhances the engineered bacterium's capacity to synthesize short-chain fatty acids (SCFAs). The second is the OLE1 gene from Saccharomyces cerevisiae, encoding a desaturase that converts SCFAs into oleic acid. Oleic acid, a monounsaturated fatty acid, is a critical component of epithelial cell membrane phospholipids, and its local supplementation has been shown to directly promote mucosal repair and epithelial barrier integrity. To ensure spatial specificity of the therapeutic effect, we employed the bile-responsive promoter P16090 to precisely control the expression of OLE1. This ensures that oleic acid synthesis is activated exclusively in the gut, where bile salts are abundant, thereby minimizing the risk of systemic side effects.

Secondly, to achieve precise antagonism of conditional pathogens, we integrated the human DEFB4A gene, encoding human beta-defensin 2, into the engineered bacterium. Defensins, as broad-spectrum antimicrobial peptides, effectively kill or inhibit a wide range of opportunistic pathogens, such as Gram-negative bacteria, while leaving most beneficial microbiota largely unaffected. This provides a robust tool for restoring a healthy microbial balance after disruptions caused by antibiotics.

To ensure biosafety, we designed a bile salt-responsive toxin-antitoxin system (Hok/Sok) regulated by the same bile-responsive promoter, P16090. The core logic of this system is as follows: When the engineered bacteria reside in the gut, P16090 is activated by bile salts, driving the expression of therapeutic genes while simultaneously suppressing the expression of the Hok toxin. However, if the engineered bacteria escape into environments with low or no bile salts (e.g., external environments or non-intestinal tissues), the P16090 promoter ceases activity. This results in the rapid expression of the Hok toxin, leading to cell death and ensuring the bacteria are swiftly eliminated. This safety mechanism prevents persistent survival or spread of the engineered bacteria in unintended environments, fundamentally mitigating ecological and biosafety risks.

In summary, the engineered *Lactobacillus casei* we designed integrates three core functional modules: **sensing (bile salt signaling)**, **execution (oleic acid and defensin synthesis)**, and **safety control (Hok/Sok toxin-antitoxin system)**. It is far more than a simple probiotic substitute; it is a "living therapeutic platform" capable of intelligently responding to the gut environment, actively repairing the epithelial barrier, precisely inhibiting pathogens, and incorporating an efficient biosafety switch. This innovative design holds the potential to provide an unprecedentedly precise, safe, and powerful intervention strategy for maintaining gut microbiota stability during the perioperative period.

## References

[1] KURDI M, BAJWA S J S, SHARMA R, et al. Gut Microbiota and Probiotics in Perioperative Management: A Narrative Review [J]. Cureus, 2024, 16(9): e68404.

[2] SUN Y, WANG K, ZHAO W. Gut microbiota in perioperative neurocognitive disorders: current evidence and future directions [J]. Front Immunol, 2023, 14: 1178691.

[3] GUO P, WANG W, XIANG Q, et al. Engineered probiotic ameliorates ulcerative colitis by restoring gut microbiota and redox homeostasis [J]. Cell Host Microbe, 2024, 32(9): 1502-18 e9.

[4] SIDDIQUI R, MAKHLOUF Z, ALHARBI A M, et al. The Gut Microbiome and Female Health [J]. Biology (Basel), 2022, 11(11).

[5] LIU Q, CHENG L, WANG M, et al. Dietary sodium acetate and sodium butyrate improve high-carbohydrate diet utilization by regulating gut microbiota, liver lipid metabolism, oxidative stress, and inflammation in largemouth bass (Micropterus salmoides) [J]. J Anim Sci Biotechnol, 2024, 15(1): 50.

