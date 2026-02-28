const questionBank = [
  {
    prompt: "In the French Constitution, who is the guarantor of national independence and respect for treaties?",
    choices: ["The Prime Minister", "The President of the Republic", "The Constitutional Council", "The National Assembly"],
    answerIndex: 1,
    explanation: "The President of the Republic is correct: Article 5 assigns the President the role of guarantor of national independence, territorial integrity, and respect for treaties. The Prime Minister (Art. 21) directs government action but is not constitutionally designated as the guarantor of independence. The Constitutional Council reviews constitutionality of laws but has no guardian-of-independence mandate. The National Assembly legislates and controls Government but does not hold this specific guarantor role."
  },
  {
    prompt: "Which article allows the President to take exceptional powers in a serious national crisis?",
    choices: ["Article 11", "Article 16", "Article 20", "Article 49"],
    answerIndex: 1,
    explanation: "Article 16 is correct: it grants the President exceptional powers when the Republic's institutions, independence, or territorial integrity face a serious and immediate threat. Article 11 concerns referendums on certain public bills. Article 20 defines the Government's role in determining national policy. Article 49 deals with Government responsibility before the National Assembly, not presidential emergency powers."
  },
  {
    prompt: "Under the Constitution, who determines and conducts the policy of the Nation?",
    choices: ["The President", "Parliament", "The Government", "The Senate"],
    answerIndex: 2,
    explanation: "The Government is correct: Article 20 explicitly states that the Government determines and conducts the policy of the Nation. The President arbitrates and guarantees continuity but does not constitutionally 'determine' policy. Parliament votes statutes and controls Government action but does not conduct policy. The Senate is only one chamber of Parliament and has no autonomous policy-making role."
  },
  {
    prompt: "Which body votes statutes (laws) in France?",
    choices: ["Only the Senate", "Parliament", "The Constitutional Council", "The Economic, Social and Environmental Council"],
    answerIndex: 1,
    explanation: "Parliament is correct: Article 24 assigns Parliament (National Assembly + Senate) the power to vote statutes. 'Only the Senate' is wrong because both chambers participate. The Constitutional Council reviews laws but does not vote them. The CESE is a consultative body that issues opinions, not votes on legislation."
  },
  {
    prompt: "Who can refer a statute to the Constitutional Council before promulgation?",
    choices: ["Only the President", "Any citizen", "The President, Prime Minister, parliamentary leaders, or 60 MPs/senators", "Only the Government"],
    answerIndex: 2,
    explanation: "The correct answer lists all authorities empowered by Article 61: the President, Prime Minister, presidents of either chamber, or 60 deputies/senators. 'Only the President' is too narrow—others share this power. 'Any citizen' is wrong because citizens can only raise constitutional questions via the QPC (Art. 61-1) during litigation, not through a priori referral. 'Only the Government' is also too narrow."
  },
  {
    prompt: "Which mechanism allows courts to send a constitutional rights question to the Constitutional Council during a trial?",
    choices: ["Referendum", "Question prioritaire de constitutionnalité (QPC)", "Motion of censure", "Ordinance"],
    answerIndex: 1,
    explanation: "The QPC is correct: introduced by Article 61-1 (2008 reform, effective 2010), it allows any litigant to challenge a statutory provision that may infringe constitutionally guaranteed rights. A referendum (Art. 11) is a popular vote on legislation, not a judicial mechanism. A motion of censure (Art. 49) is Parliament's tool to challenge Government responsibility. An ordinance (Art. 38) is a government legislative instrument, not a court referral."
  },
  {
    prompt: "What is the normal maximum presidential term length under the current Constitution?",
    choices: ["4 years", "5 years", "6 years", "7 years"],
    answerIndex: 1,
    explanation: "5 years is correct: the 2000 constitutional reform (quinquennat) reduced the term from seven to five years under Article 6. 4 years is shorter than any French presidential mandate. 6 years has never been used for the presidency (it applies to senators). 7 years (septennat) was the original term from 1958 to 2000 but is no longer in force."
  },
  {
    prompt: "Which article defines referendum use for certain public bills?",
    choices: ["Article 8", "Article 11", "Article 34", "Article 54"],
    answerIndex: 1,
    explanation: "Article 11 is correct: it allows the President to submit bills on public powers, economic/social/environmental policy, or treaty ratification to referendum. Article 8 concerns appointment of the Prime Minister and ministers. Article 34 defines the legislative domain (statute vs regulation). Article 54 deals with treaty-Constitution compatibility referral to the Constitutional Council."
  },
  {
    prompt: "Who is responsible to Parliament under the Constitution?",
    choices: ["The President", "The Government", "The Constitutional Council", "The Council of State"],
    answerIndex: 1,
    explanation: "The Government is correct: Article 20 expressly makes the Government responsible to Parliament. The President is politically irresponsible before Parliament (Art. 67-68 governs impeachment only for breach of duties). The Constitutional Council is an independent body with no parliamentary accountability. The Council of State is an advisory and judicial body, not politically accountable to Parliament."
  },
  {
    prompt: "Which article is associated with Government responsibility and use of section 3 to pass a bill unless censured?",
    choices: ["Article 49", "Article 16", "Article 89", "Article 72"],
    answerIndex: 0,
    explanation: "Article 49 is correct: paragraph 3 allows the Prime Minister to engage Government responsibility on a text, which is considered adopted unless the Assembly passes a motion of censure within 24 hours. Article 16 concerns presidential emergency powers, unrelated to legislative procedure. Article 89 governs constitutional amendments. Article 72 deals with local government (collectivités territoriales), not Government responsibility."
  },
  {
    prompt: "Who appoints the Prime Minister?",
    choices: ["The Senate President", "The National Assembly", "The President of the Republic", "The Constitutional Council"],
    answerIndex: 2,
    explanation: "The President of the Republic is correct: Article 8 gives the President sole authority to appoint the Prime Minister, though political practice requires choosing someone who can command a parliamentary majority. The Senate President has no appointment power (they act as interim President if needed). The National Assembly does not formally appoint but can force resignation through censure. The Constitutional Council has no role in Government formation."
  },
  {
    prompt: "Which constitutional revision procedure article applies to amending the Constitution?",
    choices: ["Article 89", "Article 55", "Article 38", "Article 12"],
    answerIndex: 0,
    explanation: "Article 89 is correct: it lays out the formal amendment procedure—initiative by President on Prime Minister's proposal or by Parliament, vote by both chambers, then approval by Congress (3/5 majority) or referendum. Article 55 concerns the hierarchy between treaties and statutes. Article 38 deals with ordinances (delegated legislation). Article 12 concerns dissolution of the National Assembly."
  },
  {
    prompt: "In CE, 1889, Cadot, what major principle was confirmed for administrative justice?",
    choices: ["Administrative judges can never annul decrees", "The Conseil d'État became the ordinary judge of administrative disputes", "Only ministers can judge administrative claims", "Administrative courts were abolished"],
    answerIndex: 1,
    explanation: "The correct answer is that the Conseil d'État became the general-competence administrative judge, ending the 'minister-judge' (ministre-juge) doctrine. 'Administrative judges can never annul decrees' is wrong—they can and do annul unlawful acts. 'Only ministers can judge administrative claims' describes the old system Cadot abolished. 'Administrative courts were abolished' is the opposite of what happened—they were strengthened."
  },
  {
    prompt: "In CE, 1950, Dame Lamotte, what principle did the Conseil d'État affirm?",
    choices: ["No appeal is possible against administrative acts", "Judicial review for abuse of power (recours pour excès de pouvoir) exists even without express text", "Only Parliament can cancel administrative acts", "Only constitutional review matters"],
    answerIndex: 1,
    explanation: "The correct answer recognizes that recours pour excès de pouvoir is a general principle of law that exists even absent explicit statutory authorization—a fundamental access-to-justice guarantee. 'No appeal is possible' is the opposite. 'Only Parliament can cancel administrative acts' confuses legislative and judicial functions. 'Only constitutional review matters' ignores the broader legality review administrative courts perform."
  },
  {
    prompt: "In CE, 1933, Benjamin, what balance did the judge require from police authorities?",
    choices: ["Public order always overrides freedoms", "Freedom always overrides public order", "Police measures must be necessary and proportionate to public order risks", "No judicial control over police powers"],
    answerIndex: 2,
    explanation: "The correct answer reflects the proportionality triple-test from Benjamin: police measures must be adapted, necessary, and proportionate to public-order threats. 'Public order always overrides freedoms' is too absolute—restrictions must be justified case by case. 'Freedom always overrides public order' ignores legitimate police purposes. 'No judicial control over police powers' is the opposite of what Benjamin established."
  },
  {
    prompt: "In CE, 1945, Aramu, what did the Conseil d'État recognize?",
    choices: ["General principles of law, including rights of defense", "A new Constitution", "Direct election of judges", "Absolute immunity of administration"],
    answerIndex: 0,
    explanation: "General principles of law (PGD) is correct: Aramu (1945) established that unwritten general principles, including the rights of defense (droits de la défense), bind the administration. 'A new Constitution' is factually wrong—no Constitution was adopted through case law. 'Direct election of judges' has never been a feature of French law. 'Absolute immunity of administration' contradicts the principle of administrative legality."
  },
  {
    prompt: "In CE, 1950, Dehaene, what was decided regarding the right to strike in public service?",
    choices: ["It is always prohibited", "It is unrestricted", "Government may regulate it to ensure continuity of public service", "Only unions decide its limits"],
    answerIndex: 2,
    explanation: "Correct: Dehaene (1950) held that the right to strike in public service exists but may be regulated by the Government to ensure continuity of essential services. 'Always prohibited' is wrong—the Preamble of 1946 recognizes the right to strike. 'Unrestricted' ignores the need to reconcile it with public-service continuity. 'Only unions decide' is incorrect—regulation is a governmental prerogative."
  },
  {
    prompt: "In CE, 1989, Nicolo, what change occurred in review of statutes?",
    choices: ["The Conseil d'État refused to compare statutes and treaties", "The Conseil d'État accepted review of a statute's compatibility with international treaties", "Treaties became inferior to statutes", "Constitutional Council was merged with Conseil d'État"],
    answerIndex: 1,
    explanation: "Correct: Nicolo (1989) overturned the previous 'écran législatif' doctrine and allowed the Conseil d'État to set aside statutes incompatible with international treaties, even posterior ones. 'Refused to compare' describes the pre-Nicolo position. 'Treaties became inferior' is the opposite of what Article 55 provides. 'Merger of institutions' never occurred—they remain distinct bodies."
  },
  {
    prompt: "In CE, 1952, Dame Kirkwood, what did the Conseil d'État confirm?",
    choices: ["International treaties can be invoked against administrative acts", "Treaties only apply in criminal law", "Administrative acts prevail over treaties", "Treaties are irrelevant in litigation"],
    answerIndex: 0,
    explanation: "Correct: Dame Kirkwood (1952) confirmed that individuals may invoke treaty provisions to challenge an administrative act (here, an extradition decree). 'Treaties only apply in criminal law' is too narrow—they apply across all branches. 'Administrative acts prevail over treaties' contradicts the supra-legislative authority of treaties (Art. 55). 'Treaties are irrelevant' ignores their direct-effect doctrine."
  },
  {
    prompt: "In CE, 1996, Koné, what principle guided interpretation of extradition agreements?",
    choices: ["Extradition for political purposes is always valid", "A constitutional principle excludes extradition for political aims", "Only foreign courts decide", "No principle applies"],
    answerIndex: 1,
    explanation: "Correct: Koné (1996) identified a PFRLR (principe fondamental reconnu par les lois de la République) prohibiting extradition for political purposes, used to interpret an extradition treaty. 'Always valid' contradicts this protective principle. 'Only foreign courts decide' ignores France's sovereign review of extradition requests. 'No principle applies' is factually wrong—the Conseil d'État specifically found one."
  },
  {
    prompt: "In CE, 2001, Ternon, what is the key rule on withdrawing unlawful individual favorable decisions?",
    choices: ["Administration can withdraw them at any time", "Withdrawal is generally limited to four months from the decision", "Withdrawal is impossible in all cases", "Only courts can withdraw them"],
    answerIndex: 1,
    explanation: "Correct: Ternon (2001) set a four-month window for the administration to withdraw an unlawful explicit individual decision that created rights, balancing legality and legal certainty. 'At any time' ignores the time limit protecting acquired rights. 'Impossible in all cases' is too absolute—withdrawal is possible within the deadline. 'Only courts can withdraw them' is wrong—the administration itself may act within the four months."
  },
  {
    prompt: "In CE, 2002, Duvignères, what became central for circulars?",
    choices: ["All circulars are immune from review", "Imperative provisions of circulars can be challenged", "Circulars automatically repeal statutes", "Only ministers may contest circulars"],
    answerIndex: 1,
    explanation: "Correct: Duvignères (2002) established the imperative-character test—if a circular contains imperative provisions (i.e., it commands rather than merely interprets), it can be challenged via recours pour excès de pouvoir. 'All circulars are immune' contradicts this ruling directly. 'Circulars automatically repeal statutes' confuses normative hierarchy. 'Only ministers may contest' is wrong—any person with standing can bring a challenge."
  },
  {
    prompt: "In CE, 2016, Fairvesta and Numericable, what did the Conseil d'État admit?",
    choices: ["Soft-law acts can never be challenged", "Certain soft-law acts can be reviewed when they produce notable effects", "Only tax acts are challengeable", "No review exists outside decrees"],
    answerIndex: 1,
    explanation: "Correct: Fairvesta/Numericable (2016) extended judicial review to soft-law instruments (recommendations, guidelines, positions) when they produce notable economic, legal, or behavioral effects. 'Can never be challenged' is the pre-2016 position now overruled. 'Only tax acts' is too narrow—the principle applies broadly. 'No review outside decrees' ignores the expanding scope of reviewable administrative acts."
  },
  {
    prompt: "In CE, 2016, Czabaj, what litigation rule was emphasized?",
    choices: ["No time limits apply without notification details", "A reasonable time limit (generally one year) may still apply for legal certainty", "Appeals are always limited to 15 days", "Only oral appeals are valid"],
    answerIndex: 1,
    explanation: "Correct: Czabaj (2016) held that even when notification of an administrative decision did not mention appeal routes (so the two-month deadline did not start), a 'reasonable time' limit—generally one year—still applies to protect legal certainty. 'No time limits' was the prior understanding of incomplete notification, now overruled. '15 days' is factually wrong. 'Only oral appeals' has no basis in French administrative procedure."
  },
  {
    prompt: "Which article allows the President to dissolve the National Assembly?",
    choices: ["Article 10", "Article 12", "Article 21", "Article 40"],
    answerIndex: 1,
    explanation: "Article 12 is correct: the President may dissolve the National Assembly after consulting the Prime Minister and presidents of both chambers. Article 10 concerns promulgation of laws. Article 21 assigns the Prime Minister direction of Government action. Article 40 restricts parliamentary financial initiatives—it cannot increase public spending or reduce revenue.",
    theme: "Institutions & Powers"
  },
  {
    prompt: "Which institution may bring down the Government through a motion of censure?",
    choices: ["The Senate", "The Constitutional Council", "The National Assembly", "The Court of Cassation"],
    answerIndex: 2,
    explanation: "The National Assembly is correct: Article 49 reserves the motion of censure to the National Assembly—the Senate cannot topple the Government. The Constitutional Council reviews law constitutionality but has no political-responsibility power. The Court of Cassation is the supreme judicial court for private and criminal law, with no role in Government accountability.",
    theme: "Institutions & Powers"
  },
  {
    prompt: "Under Article 34, what does the Constitution define?",
    choices: ["The domains of statute", "Constitutional amendment only", "Presidential succession", "Military command structure"],
    answerIndex: 0,
    explanation: "The domains of statute is correct: Article 34 enumerates subjects reserved for Parliament (civil liberties, taxation, criminal law, etc.). 'Constitutional amendment only' confuses it with Article 89. 'Presidential succession' is covered by Articles 6-7, not 34. 'Military command structure' falls under presidential and governmental prerogatives (Arts. 15, 21), not the scope of Article 34.",
    theme: "Constitutional Procedures & Review"
  },
  {
    prompt: "Article 37 concerns which constitutional distinction?",
    choices: ["Treaty control", "Legislative vs regulatory domain", "Judicial appointments", "Referendum timing"],
    answerIndex: 1,
    explanation: "Legislative vs regulatory domain is correct: Article 37 creates a residual regulatory competence—any matter not listed in Article 34 falls within the executive's regulatory power. 'Treaty control' relates to Articles 53-55. 'Judicial appointments' is governed by the CSM and organic statutes. 'Referendum timing' involves Article 11, not 37.",
    theme: "Constitutional Procedures & Review"
  },
  {
    prompt: "In CE, 1919, Labonne, what power was recognized?",
    choices: ["Parliamentary police power", "Autonomous regulatory police power at national level", "Judicial veto over decrees", "Constitutional amendment power"],
    answerIndex: 1,
    explanation: "Correct: Labonne (1919) recognized the head of state's autonomous general police power to adopt regulatory measures for public order nationwide, independent of any statutory delegation. 'Parliamentary police power' is wrong—police power is executive. 'Judicial veto over decrees' does not exist in French law. 'Constitutional amendment power' is unrelated to regulatory police.",
    theme: "Conseil d'État Jurisprudence"
  },
  {
    prompt: "In CE, 1959, Syndicat général des ingénieurs-conseils, what was affirmed?",
    choices: ["Regulations may ignore general principles", "Administrative regulations must respect general principles of law", "Only statutes bind administration", "Courts cannot review regulations"],
    answerIndex: 1,
    explanation: "Correct: Syndicat général des ingénieurs-conseils (1959) held that even autonomous regulations (taken under Art. 37, not implementing a statute) must respect general principles of law (PGD). 'Regulations may ignore general principles' is the opposite. 'Only statutes bind administration' underestimates the role of PGD. 'Courts cannot review regulations' contradicts the fundamental legality principle.",
    theme: "Conseil d'État Jurisprudence"
  },
  {
    prompt: "In CE, 1995, Commune de Morsang-sur-Orge, which component of public order was emphasized?",
    choices: ["Tax equality", "Human dignity", "Treaty supremacy", "Electoral neutrality"],
    answerIndex: 1,
    explanation: "Human dignity is correct: Morsang-sur-Orge (1995) added respect for human dignity to the traditional components of public order (safety, tranquility, salubrity), justifying a ban on 'dwarf-tossing.' 'Tax equality' is a fiscal principle unrelated to police powers. 'Treaty supremacy' concerns international law hierarchy. 'Electoral neutrality' relates to election law, not administrative police.",
    theme: "Conseil d'État Jurisprudence"
  },
  {
    prompt: "In CE, 2007, Société Arcelor, what method did the Conseil d'État use for constitutional review issues linked to EU law?",
    choices: ["Automatic rejection", "Direct annulment of all implementing decrees", "A constitutional-equivalence and EU-law control approach", "Referral only to foreign courts"],
    answerIndex: 2,
    explanation: "Correct: Arcelor (2007) created a two-step method—first check whether an equivalent EU-law principle protects the constitutional requirement invoked; if yes, review the implementing act under EU law (including a preliminary reference to the CJEU if needed). 'Automatic rejection' ignores the nuanced test. 'Direct annulment of all implementing decrees' is too sweeping and would conflict with EU primacy. 'Referral only to foreign courts' mischaracterizes the role of the CJEU.",
    theme: "Conseil d'État Jurisprudence"
  },
  {
    prompt: "In CE, 2014, Jousselin, what happened regarding interpretation circulars?",
    choices: ["They became binding regulations", "Purely interpretative circulars remained generally not challengeable", "All circulars were abolished", "They replaced decrees"],
    answerIndex: 1,
    explanation: "Correct: Jousselin (2014) confirmed that purely interpretative circulars—those that merely restate existing law—remain generally not challengeable by themselves since they add nothing new. 'Binding regulations' confuses imperative circulars (Duvignères) with interpretative ones. 'All circulars were abolished' is factually wrong. 'They replaced decrees' misunderstands the normative hierarchy.",
    theme: "Conseil d'État Jurisprudence"
  },
  {
    prompt: "In CE, 2018, CFDT-Finances, what principle was strengthened for regulatory acts?",
    choices: ["Perpetual contestability", "After finality, challenges are limited mainly to competence, form/procedure defects, and legality of content", "No review at all", "Only criminal courts may intervene"],
    answerIndex: 1,
    explanation: "Correct: CFDT-Finances (2018) held that once a regulatory act becomes final, challenges on certain grounds (like external legality other than competence) are no longer admissible, reinforcing legal certainty. 'Perpetual contestability' was the old default position but undermined stability. 'No review at all' goes too far—some grounds remain open. 'Only criminal courts' is procedurally incorrect for administrative acts.",
    theme: "Conseil d'État Jurisprudence"
  },
  {
    prompt: "Under Article 55, what is the relationship between treaties and statutes in French law?",
    choices: ["Statutes always prevail", "Treaties prevail over statutes subject to reciprocity and application conditions", "They have equal rank in all situations", "Treaties have no domestic effect"],
    answerIndex: 1,
    explanation: "Correct: Article 55 gives duly ratified or approved treaties supra-legislative authority, conditioned on reciprocity and proper publication. 'Statutes always prevail' contradicts the constitutional hierarchy. 'Equal rank' ignores Art. 55's explicit superiority clause. 'No domestic effect' contradicts France's monist tradition regarding treaties.",
    theme: "Constitutional Procedures & Review"
  },
  {
    prompt: "Which body can be seized under Article 54 when an international commitment may conflict with the Constitution?",
    choices: ["Court of Cassation", "Constitutional Council", "Council of State", "Audit Court"],
    answerIndex: 1,
    explanation: "The Constitutional Council is correct: Article 54 provides that if a treaty clause is found to contradict the Constitution, ratification requires a prior constitutional amendment. The Court of Cassation handles private and criminal law cassation, not treaty-Constitution compatibility. The Council of State advises the Government but does not perform this specific control. The Audit Court (Cour des comptes) audits public finances, not treaties.",
    theme: "Constitutional Procedures & Review"
  },
  {
    prompt: "What does the separation of powers principle primarily seek to avoid?",
    choices: ["Any role for judges", "Concentration of all state powers in one authority", "Any control over Government", "Existence of Parliament"],
    answerIndex: 1,
    explanation: "Correct: the principle, rooted in Montesquieu and Article 16 DDHC, distributes legislative, executive, and judicial powers to prevent tyranny. 'Any role for judges' contradicts the principle, which guarantees an independent judiciary. 'Any control over Government' would eliminate checks and balances. 'Existence of Parliament' is an opposite—separation of powers actually requires Parliament.",
    theme: "State Organization"
  },
  {
    prompt: "Which of the following is an example of an independent administrative authority (AAI) in France?",
    choices: ["Cour de cassation", "CNIL", "Cour des comptes", "Conseil constitutionnel"],
    answerIndex: 1,
    explanation: "The CNIL (Commission nationale de l'informatique et des libertés) is correct: it is a textbook AAI created to regulate data protection independently of the executive. The Cour de cassation is a judicial court, not an administrative authority. The Cour des comptes is a financial jurisdiction, not an AAI. The Conseil constitutionnel is a constitutional body, not classified as an AAI.",
    theme: "State Organization"
  },
  {
    prompt: "Under Article 38, ordinances (ordonnances) are adopted by the Government after what prerequisite?",
    choices: ["Automatic approval by the Constitutional Council", "A statute authorizing the Government to legislate for a limited time", "A referendum", "A Senate veto"],
    answerIndex: 1,
    explanation: "Correct: Article 38 requires a loi d'habilitation—Parliament authorizes the Government to act by ordinance in areas normally reserved for statute, for a limited period and defined scope. 'Automatic approval by the Constitutional Council' is wrong—the CC may review the enabling law but does not approve ordinances. 'A referendum' is not required for ordinances. 'A Senate veto' has no procedural basis here.",
    theme: "Norm Hierarchy & Review"
  },
  {
    prompt: "Which set belongs to the bloc de constitutionnalité?",
    choices: ["Constitution of 1958, DDHC 1789, Preamble of 1946, Environmental Charter of 2004", "Only organic laws", "Only EU regulations", "Only jurisprudence from the Court of Cassation"],
    answerIndex: 0,
    explanation: "Correct: the bloc de constitutionnalité comprises the 1958 Constitution, the 1789 DDHC, the 1946 Preamble (including PFRLR and social principles), and the 2004 Environmental Charter—all at the summit of the legal hierarchy. Organic laws rank below the Constitution. EU regulations have supra-legislative but not constitutional rank. Court of Cassation case law does not form part of the constitutional bloc.",
    theme: "Norm Hierarchy & Review"
  },
  {
    prompt: "In France, which judges mainly perform contrôle de conventionalité of statutes?",
    choices: ["Only the Constitutional Council", "Ordinary courts in both judicial and administrative orders", "Only the President", "Only prefects"],
    answerIndex: 1,
    explanation: "Correct: since IVG (CC, 1975) and Nicolo (CE, 1989) / Jacques Vabre (Cass., 1975), ordinary courts in both orders set aside statutes incompatible with treaties. The Constitutional Council expressly refused to perform conventionality review (it controls constitutionality only). The President plays no judicial review role. Prefects are executive agents, not judges.",
    theme: "Norm Hierarchy & Review"
  },
  {
    prompt: "Which constitutional article states that judicial authority is guardian of individual liberty?",
    choices: ["Article 66", "Article 49", "Article 11", "Article 20"],
    answerIndex: 0,
    explanation: "Article 66 is correct: it designates the judicial authority (autorité judiciaire) as the guardian of individual liberty and prohibits arbitrary detention. Article 49 concerns Government responsibility. Article 11 governs referendums. Article 20 defines the Government's policy-making role—none of them address individual liberty protection.",
    theme: "Justice Organization"
  },
  {
    prompt: "What is a key legacy of the Law of 16-24 August 1790 regarding jurisdictional organization?",
    choices: ["Fusion of judicial and administrative authorities", "Separation between judicial courts and administrative authorities", "Suppression of all appeals", "Creation of constitutional review"],
    answerIndex: 1,
    explanation: "Correct: the 1790 law forbade judicial courts from interfering with administrative operations, laying the foundation for the dual-jurisdiction system. 'Fusion' is the opposite of what occurred. 'Suppression of all appeals' is historically inaccurate. 'Creation of constitutional review' only came much later, with the 1958 Constitution and the Conseil constitutionnel.",
    theme: "Justice Organization"
  },
  {
    prompt: "In Tribunal des conflits, Blanco (1873), what principle was affirmed?",
    choices: ["Civil Code alone governs all state liability", "State liability in public service follows special administrative rules", "No liability of public authorities", "Constitutional Council controls all damages claims"],
    answerIndex: 1,
    explanation: "Correct: Blanco (1873) established that state liability for public-service activities is governed by autonomous administrative-law rules, not the Civil Code, and falls under administrative court jurisdiction. 'Civil Code alone' is what Blanco rejected. 'No liability' contradicts the very purpose of the ruling. 'Constitutional Council controls damages claims' is wrong—the CC reviews constitutionality, not tort cases.",
    theme: "Justice Organization"
  },
  {
    prompt: "In Tribunal des conflits, Bac d'Eloka (1921), what distinction was reinforced?",
    choices: ["Criminal/civil", "Constitutional/conventional", "SPA/SPIC distinction in public services", "Parliament/Government"],
    answerIndex: 2,
    explanation: "SPA/SPIC is correct: Bac d'Eloka (1921) established that industrial and commercial public services (SPIC) operate under private-law rules and judicial-court jurisdiction, unlike administrative public services (SPA). Criminal/civil is a private-law distinction unrelated. Constitutional/conventional describes two types of legal review, not service types. Parliament/Government is an institutional, not a service classification.",
    theme: "Justice Organization"
  },
  {
    prompt: "What is the primary role of the Tribunal des conflits?",
    choices: ["Judge criminal cases involving ministers", "Resolve conflicts of jurisdiction between administrative and judicial orders", "Review constitutionality of laws", "Adopt decrees"],
    answerIndex: 1,
    explanation: "Correct: the Tribunal des conflits resolves positive and negative conflicts of jurisdiction between the administrative and judicial orders, ensuring each handles cases within its competence. Ministerial criminal cases go to the Cour de justice de la République. Reviewing constitutionality is the Constitutional Council's role. Adopting decrees is an executive function.",
    theme: "Justice Organization"
  },
  {
    prompt: "Which institution is the supreme court of the administrative order?",
    choices: ["Cour de cassation", "Conseil d'État", "Conseil constitutionnel", "Tribunal judiciaire de Paris"],
    answerIndex: 1,
    explanation: "The Conseil d'État is correct: it sits atop the administrative court hierarchy (tribunaux administratifs → cours administratives d'appel → Conseil d'État). The Cour de cassation is the supreme judicial court for private and criminal matters. The Conseil constitutionnel reviews constitutionality, not administrative disputes. The Tribunal judiciaire de Paris is a first-instance court in the judicial order.",
    theme: "Justice Organization"
  },
  {
    prompt: "What does recours pour excès de pouvoir mainly seek?",
    choices: ["Compensation for damages", "Annulment of an unlawful administrative act", "Criminal conviction of officials", "Automatic constitutional amendment"],
    answerIndex: 1,
    explanation: "Annulment of an unlawful administrative act is correct: the REP is an objective recours (procès fait à un acte) aimed solely at annulling illegal administrative decisions. Compensation for damages is the purpose of recours de plein contentieux/responsabilité. Criminal conviction falls under criminal courts. Automatic constitutional amendment has no connection to administrative litigation.",
    theme: "Justice Organization"
  },
  {
    prompt: "In administrative emergency proceedings, référé-liberté (CJA, art. L.521-2) allows the judge to act within: ",
    choices: ["24 hours", "48 hours", "15 days", "1 month"],
    answerIndex: 1,
    explanation: "48 hours is correct: the référé-liberté judge must rule within 48 hours when a fundamental freedom is subject to a serious and manifestly unlawful infringement. 24 hours is too short and not what the code provides. 15 days is the standard référé-suspension timeframe, not référé-liberté. 1 month would defeat the urgency purpose of this emergency remedy.",
    theme: "Justice Organization"
  },
  {
    prompt: "In public law, the liberty of surety (sûreté) is mainly linked to protection against: ",
    choices: ["Taxation", "Arbitrary arrest or detention", "Voting restrictions", "Noise nuisance"],
    answerIndex: 1,
    explanation: "Arbitrary arrest or detention is correct: sûreté, proclaimed in Article 2 DDHC and protected by Article 66 of the Constitution, guards against arbitrary deprivation of physical liberty. Taxation is a fiscal matter unrelated to personal freedom. Voting restrictions concern electoral rights. Noise nuisance is an environmental/neighborhood matter, not a personal liberty issue.",
    theme: "Public Freedoms"
  },
  {
    prompt: "Freedom of movement (liberté d'aller et venir) may be restricted only if the measure is: ",
    choices: ["Politically popular", "Necessary, suitable, and proportionate to a legitimate objective", "Approved by media", "Permanent by default"],
    answerIndex: 1,
    explanation: "Necessary, suitable, and proportionate is correct: any restriction on the liberté d'aller et venir must pursue a legitimate aim and pass a triple proportionality test (adapted, necessary, proportionate stricto sensu). 'Politically popular' is irrelevant to legal standards. 'Approved by media' has no legal basis. 'Permanent by default' contradicts the requirement that restrictions be limited in time and scope.",
    theme: "Public Freedoms"
  },
  {
    prompt: "The principle of respect for the human person in administrative public-order case law notably includes: ",
    choices: ["Commercial freedom only", "Human dignity", "Freedom from all regulation", "Diplomatic immunity"],
    answerIndex: 1,
    explanation: "Human dignity is correct: since Morsang-sur-Orge (CE, 1995), dignity is recognized as a component of public order that grounds administrative police powers. 'Commercial freedom only' is too narrow. 'Freedom from all regulation' contradicts the legitimacy of proportionate regulation. 'Diplomatic immunity' is an international-law concept unrelated to domestic public-order components.",
    theme: "Public Freedoms"
  },
  {
    prompt: "Protection of private life in French public law is strongly connected to: ",
    choices: ["Absolute secrecy of all files", "Rights and freedoms standards, including constitutional and conventional protections", "Only criminal law", "Only local regulations"],
    answerIndex: 1,
    explanation: "Correct: private life is protected by constitutional principles (Art. 2 DDHC as interpreted by the CC) and by Article 8 ECHR, creating multi-layered guarantees. 'Absolute secrecy of all files' overstates the right—transparency and data-access rights exist. 'Only criminal law' ignores constitutional and administrative protections. 'Only local regulations' drastically understates the scope—protection operates at national and European levels.",
    theme: "Public Freedoms"
  },
  {
    prompt: "Freedom of conscience under French constitutional tradition protects primarily: ",
    choices: ["Only majority beliefs", "The right to hold beliefs and convictions", "Only political parties", "Only religious authorities"],
    answerIndex: 1,
    explanation: "The right to hold beliefs and convictions is correct: freedom of conscience, rooted in Article 10 DDHC and reaffirmed by the Constitutional Council, protects all personal convictions—religious, philosophical, or political. 'Only majority beliefs' would negate the protection of minorities. 'Only political parties' reduces conscience to partisan affiliation. 'Only religious authorities' confuses institutional religion with individual inner conviction.",
    theme: "Public Freedoms"
  },
  {
    prompt: "Freedom of religion in a laïque Republic implies that the State must: ",
    choices: ["Promote one official religion", "Remain neutral and guarantee free exercise within legal limits", "Ban all religious expression", "Transfer all authority to religious bodies"],
    answerIndex: 1,
    explanation: "Correct: laïcité under Article 1 of the Constitution means the Republic is neutral—it neither promotes nor opposes any religion—while guaranteeing free exercise within the limits of public order. 'Promote one official religion' contradicts neutrality. 'Ban all religious expression' would violate freedom of religion itself. 'Transfer authority to religious bodies' would undermine state sovereignty and the separation of churches and State (1905 law).",
    theme: "Public Freedoms"
  },
  {
    prompt: "Article 11 of the 1789 Declaration is classically linked to which freedom?",
    choices: ["Freedom of expression and communication", "Freedom of property transfer only", "Freedom from taxation", "Freedom of administrative appeal"],
    answerIndex: 0,
    explanation: "Freedom of expression and communication is correct: Article 11 DDHC states that free communication of thoughts and opinions is one of the most precious rights of man. 'Freedom of property transfer only' confuses it with Article 17 DDHC on property. 'Freedom from taxation' misreads the Declaration, which accepts taxation (Arts. 13-14 DDHC). 'Freedom of administrative appeal' is a procedural right, not the subject of Art. 11 DDHC.",
    theme: "Public Freedoms"
  },
  {
    prompt: "Freedom of assembly in French public law is generally characterized as: ",
    choices: ["Always subject to prior judicial authorization", "A freedom that can be regulated only for public-order reasons", "Reserved to associations recognized by decree", "Limited to electoral periods"],
    answerIndex: 1,
    explanation: "Correct: freedom of assembly (liberté de réunion) can be restricted only for public-order reasons, and any restriction must be proportionate. 'Always subject to prior judicial authorization' is wrong—most assemblies require only a declaration, not judicial approval. 'Reserved to associations recognized by decree' confuses assembly with the old regime of prior authorization for associations. 'Limited to electoral periods' has no legal basis.",
    theme: "Public Freedoms"
  },
  {
    prompt: "Public demonstrations (manifestations) may be prohibited by administrative police only when: ",
    choices: ["Any opposition exists", "Serious public-order risks cannot be prevented by less restrictive measures", "The route is long", "The event is political"],
    answerIndex: 1,
    explanation: "Correct: prohibition is the last resort—administrative police must first try less restrictive measures (rerouting, conditions) and may ban only when serious public-order risks persist. 'Any opposition exists' would effectively ban all protests. 'The route is long' is irrelevant to legality. 'The event is political' would violate content-neutrality—the political nature of a demonstration does not justify a ban.",
    theme: "Public Freedoms"
  },
  {
    prompt: "Which 1971 Constitutional Council decision gave constitutional value to freedom of association?",
    choices: ["Liberté d'association", "IVG", "Traité de Maastricht", "QPC Bioethics"],
    answerIndex: 0,
    explanation: "Liberté d'association (CC, 16 July 1971) is correct: it struck down a law imposing prior authorization for associations, elevating freedom of association to constitutional rank via the Preamble of 1946 and its reference to fundamental principles. The IVG decision (1975) concerned abortion law and the distinction between constitutional and conventional review. Traité de Maastricht (1992) addressed EU treaty compatibility. 'QPC Bioethics' is not associated with this foundational 1971 ruling.",
    theme: "Public Freedoms"
  },
  {
    prompt: "In terms of legal hierarchy, an administrative regulation must comply with: ",
    choices: ["Only local custom", "Constitution, treaties/EU norms (as applicable), and statutes", "Only circulars", "Only the Prime Minister's speeches"],
    answerIndex: 1,
    explanation: "Correct: administrative regulations sit below the Constitution, international/EU norms, and statutes and must comply with all of them. 'Only local custom' understates the hierarchy—custom has a minimal role in French public law. 'Only circulars' reverses the hierarchy, since circulars themselves are subordinate to regulations. 'Only the Prime Minister's speeches' has no legal basis whatsoever.",
    theme: "Norm Hierarchy & Review"
  }
];

const QUESTIONS_PER_QUIZ = 5;
const HISTORY_STORAGE_KEY = "french_constitution_quiz_history";
const SPACED_REP_KEY = "french_constitution_quiz_spaced";
const STREAK_KEY = "french_constitution_quiz_streak";
const BADGES_KEY = "french_constitution_quiz_badges";

const introSection = document.getElementById("intro");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const historySection = document.getElementById("history");
const badgesSection = document.getElementById("badges");
const quizTabBtn = document.getElementById("quiz-tab-btn");
const historyTabBtn = document.getElementById("history-tab-btn");
const badgesTabBtn = document.getElementById("badges-tab-btn");
const themeSelect = document.getElementById("theme-select");
const streakBanner = document.getElementById("streak-banner");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const questionTextEl = document.getElementById("question-text");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const finalScoreEl = document.getElementById("final-score");
const resultMessageEl = document.getElementById("result-message");
const newBadgesEl = document.getElementById("new-badges");
const historyOverviewEl = document.getElementById("history-overview");
const themeSummaryEl = document.getElementById("theme-summary");
const attemptListEl = document.getElementById("attempt-list");
const badgesOverviewEl = document.getElementById("badges-overview");
const badgesGridEl = document.getElementById("badges-grid");

let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let currentAttemptAnswers = [];
let newlyUnlockedBadges = [];

/* ── Badge Definitions ─────────────────────────────────── */
const BADGE_DEFS = [
  { id: "bloc_party",             icon: "🎉", name: "Bloc Party",                       desc: "Complete your first quiz.",                            check: (s) => s.totalAttempts >= 1 },
  { id: "separation_of_powers_up",icon: "⚡", name: "Separation of Powers-Up",           desc: "Score 100 % on a quiz.",                               check: (s) => s.perfectQuizzes >= 1 },
  { id: "fifth_republic_strikes", icon: "🏛️", name: "The Fifth Republic Strikes Back",   desc: "Complete 5 quizzes.",                                  check: (s) => s.totalAttempts >= 5 },
  { id: "dame_lamotte_it_be",     icon: "⚖️", name: "Dame Lamotte It Be",                desc: "Complete 10 quizzes.",                                 check: (s) => s.totalAttempts >= 10 },
  { id: "conseil_detat_of_mind",  icon: "🧠", name: "Conseil d'État of Mind",            desc: "Score 100 % on a Conseil d'État quiz.",                check: (s) => s.perfectByTheme["Conseil d'État Jurisprudence"] },
  { id: "motion_of_ensure",       icon: "🔥", name: "Motion of Ensure",                  desc: "Reach a 3-day streak.",                                check: (s) => s.streak >= 3 },
  { id: "ordonnance_in_court",    icon: "📜", name: "Ordonnance in the Court",            desc: "Complete 25 quizzes.",                                 check: (s) => s.totalAttempts >= 25 },
  { id: "habeas_brainpus",        icon: "💡", name: "Habeas Brainpus",                   desc: "Answer 100 questions correctly (total).",              check: (s) => s.totalCorrect >= 100 },
  { id: "the_constitutionalist",  icon: "👑", name: "The Constitutionalist",             desc: "Score 100 % three times in a row.",                    check: (s) => s.consecutivePerfects >= 3 },
  { id: "nicolo_deon",            icon: "🌍", name: "Nicolo-deon",                       desc: "Answer 50 questions correctly (total).",               check: (s) => s.totalCorrect >= 50 },
  { id: "benjamin_button",        icon: "🔄", name: "Benjamin Button",                   desc: "Improve on your previous score.",                      check: (s) => s.improved },
  { id: "septennat_survivor",     icon: "🗓️", name: "Septennat Survivor",                desc: "Reach a 7-day streak.",                                check: (s) => s.streak >= 7 },
  { id: "full_quorum",            icon: "🏆", name: "Full Quorum",                       desc: "Complete 50 quizzes.",                                 check: (s) => s.totalAttempts >= 50 },
  { id: "libertes_fondamentales",icon: "🗽", name: "Libertés Fondamen-totally Nailed It",desc: "Score 100 % on a Public Freedoms quiz.",               check: (s) => s.perfectByTheme["Public Freedoms"] },
  { id: "article_16_emergency",  icon: "🚨", name: "Article 16 Emergency Ace",          desc: "Get 5 correct answers in a row within a quiz.",        check: (s) => s.fiveInARow },
];

/* ── Spaced Repetition Storage ─────────────────────────── */
function getSpacedData() {
  try {
    const raw = localStorage.getItem(SPACED_REP_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
function saveSpacedData(data) {
  try { localStorage.setItem(SPACED_REP_KEY, JSON.stringify(data)); } catch {}
}

function recordAnswer(questionIndex, correct) {
  const data = getSpacedData();
  const key = String(questionIndex);
  if (!data[key]) data[key] = { wrong: 0, right: 0, lastWrong: 0 };
  if (correct) {
    data[key].right += 1;
  } else {
    data[key].wrong += 1;
    data[key].lastWrong = Date.now();
  }
  saveSpacedData(data);
}

function weightedSelect(pool, count) {
  const data = getSpacedData();
  const now = Date.now();
  const DAY = 86400000;

  const weighted = pool.map((question) => {
    const bankIndex = questionBank.indexOf(question);
    const key = String(bankIndex);
    const record = data[key];
    let weight = 1;
    if (record) {
      const recency = record.lastWrong ? Math.max(0.2, 1 - (now - record.lastWrong) / (7 * DAY)) : 0;
      const errorRatio = record.wrong / (record.wrong + record.right);
      weight = 1 + errorRatio * 3 + recency * 2;
    }
    return { question, weight };
  });

  const selected = [];
  const remaining = [...weighted];

  for (let i = 0; i < count && remaining.length > 0; i++) {
    const totalWeight = remaining.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    let chosenIdx = 0;
    for (let j = 0; j < remaining.length; j++) {
      random -= remaining[j].weight;
      if (random <= 0) { chosenIdx = j; break; }
    }
    selected.push(remaining[chosenIdx].question);
    remaining.splice(chosenIdx, 1);
  }
  return selected;
}

/* ── Streak Tracking ───────────────────────────────────── */
function getStreakData() {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    return raw ? JSON.parse(raw) : { currentStreak: 0, lastDate: null };
  } catch { return { currentStreak: 0, lastDate: null }; }
}
function saveStreakData(data) {
  try { localStorage.setItem(STREAK_KEY, JSON.stringify(data)); } catch {}
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak() {
  const streakData = getStreakData();
  const today = todayString();
  if (streakData.lastDate === today) return streakData.currentStreak;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (streakData.lastDate === yesterday) {
    streakData.currentStreak += 1;
  } else if (streakData.lastDate !== today) {
    streakData.currentStreak = 1;
  }
  streakData.lastDate = today;
  saveStreakData(streakData);
  return streakData.currentStreak;
}

function renderStreakBanner() {
  const data = getStreakData();
  if (data.currentStreak >= 2) {
    streakBanner.innerHTML = `<span class="streak-fire">🔥</span> ${data.currentStreak}-day streak! Keep it going.`;
  } else if (data.currentStreak === 1) {
    streakBanner.innerHTML = `<span class="streak-fire">🔥</span> You practiced today. Come back tomorrow to start a streak!`;
  } else {
    streakBanner.textContent = "Start a quiz to begin your streak.";
  }
}

/* ── Badge System ──────────────────────────────────────── */
function getUnlockedBadges() {
  try {
    const raw = localStorage.getItem(BADGES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function saveUnlockedBadges(badges) {
  try { localStorage.setItem(BADGES_KEY, JSON.stringify(badges)); } catch {}
}

function computeBadgeStats() {
  const history = getHistory();
  const streakData = getStreakData();
  const totalAttempts = history.length;
  const totalCorrect = history.reduce((sum, a) => sum + a.score, 0);
  const perfectQuizzes = history.filter((a) => a.score === a.total).length;

  let consecutivePerfects = 0;
  let maxConsecutive = 0;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].score === history[i].total) {
      consecutivePerfects++;
      maxConsecutive = Math.max(maxConsecutive, consecutivePerfects);
    } else {
      break;
    }
  }

  const perfectByTheme = {};
  history.forEach((attempt) => {
    const ts = attempt.themeStats || {};
    Object.entries(ts).forEach(([theme, stats]) => {
      if (stats.total > 0 && stats.correct === stats.total) {
        perfectByTheme[theme] = true;
      }
    });
  });

  const improved = history.length >= 2 &&
    history[history.length - 1].score / history[history.length - 1].total >
    history[history.length - 2].score / history[history.length - 2].total;

  let fiveInARow = false;
  if (currentAttemptAnswers.length >= 5) {
    let run = 0;
    for (const ans of currentAttemptAnswers) {
      run = ans.correct ? run + 1 : 0;
      if (run >= 5) { fiveInARow = true; break; }
    }
  }

  return {
    totalAttempts, totalCorrect, perfectQuizzes,
    consecutivePerfects: maxConsecutive,
    streak: streakData.currentStreak,
    perfectByTheme, improved, fiveInARow
  };
}

function checkAndAwardBadges() {
  const stats = computeBadgeStats();
  const unlocked = getUnlockedBadges();
  newlyUnlockedBadges = [];

  BADGE_DEFS.forEach((badge) => {
    if (!unlocked.includes(badge.id) && badge.check(stats)) {
      unlocked.push(badge.id);
      newlyUnlockedBadges.push(badge);
    }
  });

  saveUnlockedBadges(unlocked);
  return newlyUnlockedBadges;
}

function renderNewBadges() {
  newBadgesEl.innerHTML = "";
  if (newlyUnlockedBadges.length === 0) return;

  newlyUnlockedBadges.forEach((badge) => {
    const div = document.createElement("div");
    div.className = "new-badge-item";
    div.innerHTML = `<span class="badge-icon">${badge.icon}</span><strong>${badge.name}</strong> — ${badge.desc}`;
    newBadgesEl.appendChild(div);
  });
}

function renderBadgesPage() {
  const unlocked = getUnlockedBadges();
  badgesOverviewEl.textContent = `${unlocked.length} / ${BADGE_DEFS.length} achievements unlocked`;
  badgesGridEl.innerHTML = "";

  BADGE_DEFS.forEach((badge) => {
    const isUnlocked = unlocked.includes(badge.id);
    const card = document.createElement("div");
    card.className = `badge-card ${isUnlocked ? "unlocked" : "locked"}`;
    card.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-name">${badge.name}</div>
      <div class="badge-desc">${isUnlocked ? badge.desc : "???"}</div>
    `;
    badgesGridEl.appendChild(card);
  });
}

function getQuestionTheme(question) {
  if (question.theme) {
    return question.theme;
  }

  const normalizedPrompt = question.prompt.toLowerCase();

  if (normalizedPrompt.startsWith("in ce") || normalizedPrompt.includes("conseil d'état")) {
    return "Conseil d'État Jurisprudence";
  }

  if (
    normalizedPrompt.includes("constitutional council") ||
    normalizedPrompt.includes("qpc") ||
    normalizedPrompt.includes("article") ||
    normalizedPrompt.includes("refer")
  ) {
    return "Constitutional Procedures & Review";
  }

  if (
    normalizedPrompt.includes("president") ||
    normalizedPrompt.includes("prime minister") ||
    normalizedPrompt.includes("government") ||
    normalizedPrompt.includes("parliament") ||
    normalizedPrompt.includes("national assembly")
  ) {
    return "Institutions & Powers";
  }

  return "General Constitutional Law";
}

function getHistory() {
  try {
    const rawValue = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!rawValue) {
      return [];
    }
    const parsedValue = JSON.parse(rawValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (error) {
    return [];
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    // ignore storage write failures
  }
}

function addAttemptToHistory() {
  const attemptThemeStats = currentAttemptAnswers.reduce((accumulator, answer) => {
    if (!accumulator[answer.theme]) {
      accumulator[answer.theme] = { correct: 0, total: 0 };
    }
    accumulator[answer.theme].total += 1;
    if (answer.correct) {
      accumulator[answer.theme].correct += 1;
    }
    return accumulator;
  }, {});

  const history = getHistory();
  history.push({
    timestamp: new Date().toISOString(),
    score,
    total: selectedQuestions.length,
    themeStats: attemptThemeStats
  });

  saveHistory(history);
}

function createListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

function renderHistory() {
  const history = getHistory();
  themeSummaryEl.innerHTML = "";
  attemptListEl.innerHTML = "";

  if (history.length === 0) {
    historyOverviewEl.textContent = "No attempts yet. Complete a quiz to track your progress over time.";
    themeSummaryEl.appendChild(createListItem("No theme data yet."));
    attemptListEl.appendChild(createListItem("No quiz attempts recorded."));
    return;
  }

  const totalAttempts = history.length;
  const totalPoints = history.reduce((sum, attempt) => sum + attempt.score, 0);
  const totalQuestions = history.reduce((sum, attempt) => sum + attempt.total, 0);
  const overallRate = totalQuestions ? Math.round((totalPoints / totalQuestions) * 100) : 0;

  const recentAttempts = history.slice(-5);
  const previousAttempts = history.slice(-10, -5);
  const recentAverage = recentAttempts.reduce((sum, attempt) => sum + attempt.score / attempt.total, 0) / recentAttempts.length;
  const previousAverage = previousAttempts.length
    ? previousAttempts.reduce((sum, attempt) => sum + attempt.score / attempt.total, 0) / previousAttempts.length
    : null;
  const trendDelta = previousAverage === null ? null : Math.round((recentAverage - previousAverage) * 100);

  historyOverviewEl.textContent = trendDelta === null
    ? `${totalAttempts} attempts recorded • overall success rate ${overallRate}%`
    : `${totalAttempts} attempts recorded • overall success rate ${overallRate}% • trend ${trendDelta >= 0 ? "+" : ""}${trendDelta} pts`;

  const globalThemeStats = history.reduce((accumulator, attempt) => {
    const themeStats = attempt.themeStats || {};
    Object.entries(themeStats).forEach(([theme, stats]) => {
      if (!accumulator[theme]) {
        accumulator[theme] = { correct: 0, total: 0 };
      }
      accumulator[theme].correct += stats.correct;
      accumulator[theme].total += stats.total;
    });
    return accumulator;
  }, {});

  const rankedThemes = Object.entries(globalThemeStats)
    .map(([theme, stats]) => {
      const rate = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
      return { theme, rate, ...stats };
    })
    .sort((firstTheme, secondTheme) => firstTheme.rate - secondTheme.rate);

  rankedThemes.forEach((themeResult, index) => {
    const prefix = index === 0 ? "Needs work" : "Performance";
    themeSummaryEl.appendChild(
      createListItem(`${prefix}: ${themeResult.theme} — ${themeResult.rate}% (${themeResult.correct}/${themeResult.total})`)
    );
  });

  history
    .slice()
    .reverse()
    .slice(0, 8)
    .forEach((attempt, index) => {
      const date = new Date(attempt.timestamp).toLocaleDateString();
      const scoreRate = Math.round((attempt.score / attempt.total) * 100);
      const entryThemeStats = Object.entries(attempt.themeStats || {}).map(([theme, stats]) => ({
        theme,
        rate: stats.total ? Math.round((stats.correct / stats.total) * 100) : 0
      }));
      entryThemeStats.sort((a, b) => a.rate - b.rate);
      const weakestTheme = entryThemeStats.length ? entryThemeStats[0].theme : "General";

      attemptListEl.appendChild(
        createListItem(`#${totalAttempts - index} • ${date} • ${attempt.score}/${attempt.total} (${scoreRate}%) • weakest: ${weakestTheme}`)
      );
    });
}

function setActiveTab(tabName) {
  quizTabBtn.classList.toggle("active", tabName === "quiz");
  historyTabBtn.classList.toggle("active", tabName === "history");
  badgesTabBtn.classList.toggle("active", tabName === "badges");
}

function showSection(section) {
  introSection.classList.remove("active");
  quizSection.classList.remove("active");
  resultSection.classList.remove("active");
  historySection.classList.remove("active");
  badgesSection.classList.remove("active");
  section.classList.add("active");
}

function shuffle(array) {
  const copied = [...array];
  for (let index = copied.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copied[index], copied[randomIndex]] = [copied[randomIndex], copied[index]];
  }
  return copied;
}

function startQuiz() {
  const selectedTheme = themeSelect.value;
  let pool = questionBank;
  if (selectedTheme !== "all") {
    pool = questionBank.filter((q) => getQuestionTheme(q) === selectedTheme);
    if (pool.length < QUESTIONS_PER_QUIZ) pool = questionBank;
  }
  selectedQuestions = weightedSelect(pool, QUESTIONS_PER_QUIZ);
  currentIndex = 0;
  score = 0;
  answered = false;
  currentAttemptAnswers = [];
  newlyUnlockedBadges = [];
  setActiveTab("quiz");
  showSection(quizSection);
  renderQuestion();
}

function renderQuestion() {
  const question = selectedQuestions[currentIndex];
  progressEl.textContent = `Question ${currentIndex + 1} / ${selectedQuestions.length}`;
  scoreEl.textContent = `Score: ${score}`;
  questionTextEl.textContent = question.prompt;
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  answered = false;
  choicesEl.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => handleAnswer(index));
    choicesEl.appendChild(button);
  });
}

function handleAnswer(choiceIndex) {
  if (answered) {
    return;
  }

  const question = selectedQuestions[currentIndex];
  const buttons = Array.from(choicesEl.querySelectorAll("button"));
  const answerIsCorrect = choiceIndex === question.answerIndex;
  const questionTheme = getQuestionTheme(question);

  answered = true;
  nextBtn.disabled = false;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answerIndex) {
      button.classList.add("correct");
    }
  });

  currentAttemptAnswers.push({
    theme: questionTheme,
    correct: answerIsCorrect
  });

  recordAnswer(questionBank.indexOf(question), answerIsCorrect);

  if (answerIsCorrect) {
    score += 1;
    scoreEl.textContent = `Score: ${score}`;
    feedbackEl.textContent = `Correct. ${question.explanation}`;
  } else {
    buttons[choiceIndex].classList.add("incorrect");
    feedbackEl.textContent = `Incorrect. ${question.explanation}`;
  }
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < selectedQuestions.length) {
    renderQuestion();
    return;
  }
  renderResult();
}

function renderResult() {
  updateStreak();
  addAttemptToHistory();
  checkAndAwardBadges();
  showSection(resultSection);
  finalScoreEl.textContent = `You scored ${score} out of ${selectedQuestions.length}.`;

  if (score === selectedQuestions.length) {
    resultMessageEl.textContent = "Excellent. You have very strong constitutional law fundamentals.";
  } else if (score >= 3) {
    resultMessageEl.textContent = "Good result. Keep practicing articles and institutions for mastery.";
  } else {
    resultMessageEl.textContent = "Keep going. Review the explanations and try another quiz.";
  }

  renderNewBadges();
}

function openQuizHome() {
  setActiveTab("quiz");
  renderStreakBanner();
  showSection(introSection);
}

function openHistory() {
  setActiveTab("history");
  renderHistory();
  showSection(historySection);
}

function openBadges() {
  setActiveTab("badges");
  renderBadgesPage();
  showSection(badgesSection);
}

quizTabBtn.addEventListener("click", openQuizHome);
historyTabBtn.addEventListener("click", openHistory);
badgesTabBtn.addEventListener("click", openBadges);
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);

renderStreakBanner();
