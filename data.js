// ============================================
// BASE DE DONNÉES - CODE PÉNAL DU TENNESSEE
// ============================================

const CODE_PENAL = {
    // PARTIE II - ATTEINTES PERSONNELLES
    "HOMICIDES": [
        {
            id: "210-1",
            name: "Meurtre au premier degré (assassinat)",
            article: "Art. 210-1",
            prison: 60,
            prisonRP: 45,
            amende: 20000,
            category: "Crime",
            description: "Meurtre avec préméditation ou lors d'un autre crime grave"
        },
        {
            id: "210-2",
            name: "Meurtre au second degré (homicide volontaire - victime majeure)",
            article: "Art. 210-2",
            prison: 40,
            prisonRP: 30,
            amende: 20000,
            category: "Crime",
            description: "Homicide volontaire sans préméditation"
        },
        {
            id: "210-2-mineur",
            name: "Meurtre au second degré (victime mineure)",
            article: "Art. 210-2",
            prison: 45,
            prisonRP: 35,
            amende: 25000,
            category: "Crime",
            description: "Homicide volontaire d'un mineur"
        },
        {
            id: "210-3",
            name: "Homicide involontaire",
            article: "Art. 210-3",
            prison: 10,
            prisonRP: 10,
            amende: 8000,
            category: "Crime",
            description: "Mort causée par négligence ou imprudence"
        },
        {
            id: "210-4",
            name: "Mise en danger de la vie d'autrui",
            article: "Art. 210-4",
            prison: 5,
            prisonRP: 3,
            amende: 5000,
            category: "Délit",
            description: "Exposition directe d'autrui à un risque de mort"
        },
        {
            id: "210-5",
            name: "Provocation au suicide",
            article: "Art. 210-5",
            prison: 2,
            prisonRP: 1,
            amende: 2500,
            category: "Délit",
            description: "Inciter une personne à se suicider"
        },
        {
            id: "210-5-aggr",
            name: "Provocation au suicide (avec décès)",
            article: "Art. 210-5",
            prison: 6,
            prisonRP: 4,
            amende: 5000,
            category: "Délit",
            description: "Provocation au suicide ayant entraîné la mort"
        }
    ],
    
    "BLESSURES": [
        {
            id: "220-1",
            name: "Agression",
            article: "Art. 220-1",
            prison: 7,
            prisonRP: 7,
            amende: 5000,
            category: "Délit",
            description: "Contact physique offensant ou danger imminent"
        },
        {
            id: "220-1-aggr",
            name: "Agression aggravée",
            article: "Art. 220-1",
            prison: 15,
            prisonRP: 15,
            amende: 20000,
            category: "Crime",
            description: "Avec graves blessures, strangulation, ou contre agent"
        },
        {
            id: "220-2",
            name: "Séquestration",
            article: "Art. 220-2",
            prison: 15,
            prisonRP: 8,
            amende: 10000,
            category: "Crime",
            description: "Privation illégale de liberté"
        },
        {
            id: "220-2-aggr-1",
            name: "Séquestration aggravée (1 circonstance)",
            article: "Art. 220-2",
            prison: 25,
            prisonRP: 13,
            amende: 15000,
            category: "Crime",
            description: "Avec une circonstance aggravante"
        },
        {
            id: "220-2-aggr-2",
            name: "Séquestration aggravée (2+ circonstances)",
            article: "Art. 220-2",
            prison: 40,
            prisonRP: 20,
            amende: 25000,
            category: "Crime",
            description: "Avec plusieurs circonstances aggravantes"
        },
        {
            id: "220-3",
            name: "Torture",
            article: "Art. 220-3",
            prison: 15,
            prisonRP: 8,
            amende: 7500,
            category: "Crime",
            description: "Infliction intentionnelle de souffrances aiguës"
        },
        {
            id: "220-4",
            name: "Maltraitance animale",
            article: "Art. 220-4",
            prison: 3,
            prisonRP: 0,
            amende: 15000,
            category: "Délit",
            description: "Blesser volontairement un animal"
        },
        {
            id: "220-4-aggr",
            name: "Maltraitance animale (avec mort)",
            article: "Art. 220-4",
            prison: 6,
            prisonRP: 0,
            amende: 25000,
            category: "Délit",
            description: "Maltraitance ayant entraîné la mort de l'animal"
        }
    ],
    
    "VIOLENCES_SEXUELLES": [
        {
            id: "230-1",
            name: "Agression sexuelle",
            article: "Art. 230-1",
            prison: 5,
            prisonRP: 3,
            amende: 7500,
            category: "Délit",
            description: "Geste à caractère sexuel sans consentement"
        },
        {
            id: "230-2",
            name: "Viol",
            article: "Art. 230-2",
            prison: 20,
            prisonRP: 10,
            amende: 20000,
            category: "Crime",
            description: "Acte de pénétration sexuelle par violence ou contrainte"
        }
    ],
    
    "ATTEINTES_PSYCHOLOGIQUES": [
        {
            id: "240-1",
            name: "Harcèlement",
            article: "Art. 240-1",
            prison: 0,
            prisonRP: 0,
            amende: 15000,
            category: "Délit",
            description: "Violence répétée verbale, physique ou psychologique"
        },
        {
            id: "240-1-sex",
            name: "Harcèlement sexuel",
            article: "Art. 240-1",
            prison: 5,
            prisonRP: 0,
            amende: 20000,
            category: "Délit",
            description: "Harcèlement pour obtenir des faveurs sexuelles"
        },
        {
            id: "240-2",
            name: "Diffamation",
            article: "Art. 240-2",
            prison: 0,
            prisonRP: 0,
            amende: 15000,
            category: "Contravention",
            description: "Atteinte à l'honneur par moyens fallacieux"
        },
        {
            id: "240-3",
            name: "Menace",
            article: "Art. 240-3",
            prison: 0,
            prisonRP: 0,
            amende: 2500,
            category: "Contravention",
            description: "Menace de commettre un crime ou délit"
        },
        {
            id: "240-3-aggr-1",
            name: "Menace aggravée (1 circonstance)",
            article: "Art. 240-3",
            prison: 8,
            prisonRP: 5,
            amende: 5000,
            category: "Délit",
            description: "Menace avec une circonstance aggravante"
        },
        {
            id: "240-3-aggr-2",
            name: "Menace aggravée (2+ circonstances)",
            article: "Art. 240-3",
            prison: 15,
            prisonRP: 8,
            amende: 10000,
            category: "Crime",
            description: "Menace avec plusieurs circonstances aggravantes"
        },
        {
            id: "240-4",
            name: "Diffusion d'informations personnelles (agent public)",
            article: "Art. 240-4",
            prison: 5,
            prisonRP: 0,
            amende: 15000,
            category: "Délit",
            description: "Doxxing d'un dépositaire de l'autorité publique"
        },
        {
            id: "240-4-aggr",
            name: "Diffusion d'informations (avec blessure)",
            article: "Art. 240-4",
            prison: 10,
            prisonRP: 0,
            amende: 45000,
            category: "Crime",
            description: "Doxxing ayant entraîné une blessure"
        }
    ],
    
    // PARTIE III - ATTEINTES À L'ORDRE
    "AUTORITE": [
        {
            id: "310-1",
            name: "Refus de se soumettre / Resisting Arrest",
            article: "Art. 310-1",
            prison: 5,
            prisonRP: 10,
            amende: 7500,
            category: "Délit",
            description: "Refus d'obéir à un officier de police"
        },
        {
            id: "310-2",
            name: "Refus d'obtempérer",
            article: "Art. 310-2",
            prison: 5,
            prisonRP: 10,
            amende: 7500,
            category: "Délit",
            description: "Ne pas s'arrêter à la sommation d'un officier"
        },
        {
            id: "310-3",
            name: "Délit de fuite",
            article: "Art. 310-3",
            prison: 5,
            prisonRP: 10,
            amende: 7500,
            category: "Délit",
            description: "Fuite après accident ou infraction"
        },
        {
            id: "310-4",
            name: "Entrave aux mesures d'assistance / Omission de porter secours",
            article: "Art. 310-4",
            prison: 2,
            prisonRP: 0,
            amende: 5000,
            category: "Délit",
            description: "Empêcher ou ne pas alerter les secours"
        },
        {
            id: "310-4-aggr",
            name: "Entrave aux secours aggravée",
            article: "Art. 310-4",
            prison: 15,
            prisonRP: 10,
            amende: 10000,
            category: "Crime",
            description: "Avec arme ou ayant entraîné un décès"
        },
        {
            id: "310-5",
            name: "Fausse alerte",
            article: "Art. 310-5",
            prison: 0,
            prisonRP: 0,
            amende: 5000,
            category: "Contravention",
            description: "Alerter les services d'urgence sans raison"
        },
        {
            id: "310-6",
            name: "Refus d'identification",
            article: "Art. 310-6",
            prison: 1,
            prisonRP: 0,
            amende: 5000,
            category: "Délit",
            description: "Refuser de décliner son identité à un officier"
        }
    ],
    
    "VOIE_PUBLIQUE": [
        {
            id: "320-1",
            name: "Dissimulation du visage dans l'espace public",
            article: "Art. 320-1",
            prison: 0,
            prisonRP: 0,
            amende: 2500,
            category: "Contravention",
            description: "Porter une tenue masquant le visage"
        },
        {
            id: "320-2a",
            name: "Participation à une émeute",
            article: "Art. 320-2",
            prison: 10,
            prisonRP: 10,
            amende: 20000,
            category: "Crime",
            description: "Participer à des actes de violence collective"
        },
        {
            id: "320-2a-aggr",
            name: "Participation à une émeute (avec arme)",
            article: "Art. 320-2",
            prison: 15,
            prisonRP: 15,
            amende: 25000,
            category: "Crime",
            description: "Émeute avec une arme"
        },
        {
            id: "320-2b",
            name: "Incitation à l'émeute",
            article: "Art. 320-2",
            prison: 5,
            prisonRP: 5,
            amende: 10000,
            category: "Délit",
            description: "Inciter d'autres personnes à l'émeute"
        },
        {
            id: "320-2b-aggr",
            name: "Incitation à l'émeute (mineur)",
            article: "Art. 320-2",
            prison: 7,
            prisonRP: 7,
            amende: 15000,
            category: "Délit",
            description: "Influencer un mineur à participer à une émeute"
        },
        {
            id: "320-3",
            name: "Trouble à l'ordre public",
            article: "Art. 320-3",
            prison: 1,
            prisonRP: 5,
            amende: 3500,
            category: "Délit",
            description: "Entraver l'exercice des libertés publiques"
        },
        {
            id: "320-3-aggr",
            name: "Trouble à l'ordre public aggravé",
            article: "Art. 320-3",
            prison: 10,
            prisonRP: 10,
            amende: 7500,
            category: "Crime",
            description: "Avec violences ou dégradations"
        },
        {
            id: "320-4",
            name: "Ivresse sur la voie publique",
            article: "Art. 320-4",
            prison: 0,
            prisonRP: 0,
            amende: 1000,
            category: "Contravention",
            description: "État d'ivresse manifeste en public"
        },
        {
            id: "320-5",
            name: "Prostitution / Proxénétisme",
            article: "Art. 320-5",
            prison: 5,
            prisonRP: 5,
            amende: 7500,
            category: "Délit",
            description: "Activité de prostitution ou proxénétisme"
        },
        {
            id: "320-6",
            name: "Abandon animal",
            article: "Art. 320-6",
            prison: 0.5,
            prisonRP: 0,
            amende: 5000,
            category: "Contravention",
            description: "Abandonner un animal domestique"
        }
    ],
    
    "JUSTICE": [
        {
            id: "330-1",
            name: "Outrage à la justice et au tribunal",
            article: "Art. 330-1",
            prison: 0.25,
            prisonRP: 0,
            amende: 1000,
            category: "Contravention",
            description: "Manque de respect envers la juridiction"
        },
        {
            id: "330-2",
            name: "Parjure",
            article: "Art. 330-2",
            prison: 5,
            prisonRP: 5,
            amende: 5000,
            category: "Délit",
            description: "Témoignage mensonger sous serment"
        },
        {
            id: "330-3",
            name: "Évasion",
            article: "Art. 330-3",
            prison: 10,
            prisonRP: 5,
            amende: 15000,
            category: "Crime",
            description: "Se soustraire à la garde"
        },
        {
            id: "330-3-aggr",
            name: "Évasion aggravée",
            article: "Art. 330-3",
            prison: 20,
            prisonRP: 10,
            amende: 25000,
            category: "Crime",
            description: "Avec violence, effraction ou corruption"
        },
        {
            id: "330-4",
            name: "Entrave à la justice",
            article: "Art. 330-4",
            prison: 10,
            prisonRP: 5,
            amende: 7500,
            category: "Crime",
            description: "Interférence dans le travail des autorités"
        },
        {
            id: "330-5",
            name: "Recel de malfaiteur",
            article: "Art. 330-5",
            prison: 3,
            prisonRP: 3,
            amende: 2500,
            category: "Délit",
            description: "Aider un criminel à se soustraire aux recherches"
        },
        {
            id: "330-6",
            name: "Recel de cadavre",
            article: "Art. 330-6",
            prison: 5,
            prisonRP: 5,
            amende: 6500,
            category: "Délit",
            description: "Cacher le cadavre d'une victime"
        },
        {
            id: "330-6-aggr",
            name: "Recel de cadavre (victime d'homicide)",
            article: "Art. 330-6",
            prison: 10,
            prisonRP: 10,
            amende: 12000,
            category: "Crime",
            description: "Cacher le corps d'une victime d'homicide"
        },
        {
            id: "330-7",
            name: "Non dénonciation d'une infraction",
            article: "Art. 330-7",
            prison: 3,
            prisonRP: 3,
            amende: 2500,
            category: "Délit",
            description: "Ne pas informer les autorités d'une infraction"
        },
        {
            id: "330-8",
            name: "Procédure abusive",
            article: "Art. 330-8",
            prison: 0,
            prisonRP: 0,
            amende: 10000,
            category: "Contravention",
            description: "Agir en justice de manière dilatoire"
        },
        {
            id: "330-9",
            name: "Dissimulation de preuve",
            article: "Art. 330-9",
            prison: 10,
            prisonRP: 5,
            amende: 7500,
            category: "Crime",
            description: "Cacher, modifier ou détruire une preuve"
        },
        {
            id: "330-10",
            name: "Fraude",
            article: "Art. 330-10",
            prison: 5,
            prisonRP: 10,
            amende: 10000,
            category: "Délit",
            description: "Tromperie ayant lésé une personne"
        },
        {
            id: "330-10-aggr",
            name: "Fraude aggravée (organisme d'État)",
            article: "Art. 330-10",
            prison: 10,
            prisonRP: 20,
            amende: 20000,
            category: "Crime",
            description: "Fraude envers un organisme public"
        },
        {
            id: "330-11",
            name: "Prise illégale d'intérêt",
            article: "Art. 330-11",
            prison: 5,
            prisonRP: 5,
            amende: 15000,
            category: "Délit",
            description: "Agent public recevant un avantage personnel"
        },
        {
            id: "330-12",
            name: "Trafic d'influence",
            article: "Art. 330-12",
            prison: 5,
            prisonRP: 0,
            amende: 20000,
            category: "Délit",
            description: "Abus d'influence pour obtenir une faveur"
        }
    ],
    
    "ATTEINTE_HONNEUR": [
        {
            id: "340-1",
            name: "Usurpation d'identité ou d'une fonction",
            article: "Art. 340-1",
            prison: 5,
            prisonRP: 3,
            amende: 3000,
            category: "Délit",
            description: "Se faire passer pour quelqu'un d'autre ou un agent"
        },
        {
            id: "340-2",
            name: "Faux et usage de faux",
            article: "Art. 340-2",
            prison: 5,
            prisonRP: 3,
            amende: 2500,
            category: "Délit",
            description: "Fabriquer ou utiliser de faux documents"
        },
        {
            id: "340-3",
            name: "Corruption (active ou passive)",
            article: "Art. 340-3",
            prison: 10,
            prisonRP: 8,
            amende: 15000,
            category: "Crime",
            description: "Solliciter ou accepter des dons pour un acte de fonction"
        },
        {
            id: "340-4",
            name: "Abus de pouvoir",
            article: "Art. 340-4",
            prison: 5,
            prisonRP: 3,
            amende: 5000,
            category: "Délit",
            description: "Acte arbitraire attentatoire à la liberté"
        },
        {
            id: "340-5",
            name: "Fausse monnaie",
            article: "Art. 340-5",
            prison: 10,
            prisonRP: 10,
            amende: 20000,
            category: "Crime",
            description: "Contrefaçon de monnaie"
        },
        {
            id: "340-6",
            name: "Atteinte au secret professionnel",
            article: "Art. 340-6",
            prison: 2,
            prisonRP: 2,
            amende: 5000,
            category: "Délit",
            description: "Révélation d'information secrète"
        },
        {
            id: "340-6-aggr",
            name: "Atteinte au secret professionnel (État)",
            article: "Art. 340-6",
            prison: 35,
            prisonRP: 30,
            amende: 10000,
            category: "Crime",
            description: "Révélation de secret d'État"
        },
        {
            id: "340-7",
            name: "Modification de preuve",
            article: "Art. 340-7",
            prison: 3,
            prisonRP: 5,
            amende: 45000,
            category: "Délit",
            description: "Altérer les lieux d'un crime"
        },
        {
            id: "340-7-aggr",
            name: "Modification de preuve aggravée",
            article: "Art. 340-7",
            prison: 5,
            prisonRP: 10,
            amende: 10000,
            category: "Délit",
            description: "Par une personne chargée de la vérité"
        },
        {
            id: "340-8",
            name: "Exercice illégal du droit",
            article: "Art. 340-8",
            prison: 5,
            prisonRP: 10,
            amende: 20000,
            category: "Délit",
            description: "Se faire passer pour un avocat sans licence"
        },
        {
            id: "340-9",
            name: "Exercice illégal de la médecine",
            article: "Art. 340-9",
            prison: 5,
            prisonRP: 10,
            amende: 20000,
            category: "Délit",
            description: "Exercer la médecine sans licence"
        }
    ],
    
    "GRAND_BANDITISME": [
        {
            id: "350-1",
            name: "Terrorisme",
            article: "Art. 350-1",
            prison: 100,
            prisonRP: 45,
            amende: 30000,
            category: "Crime",
            description: "Acte visant à troubler l'ordre par la terreur"
        },
        {
            id: "350-2",
            name: "Bande organisée",
            article: "Art. 350-2",
            prison: 10,
            prisonRP: 5,
            amende: 8000,
            category: "Crime",
            description: "Groupement pour commettre des infractions"
        }
    ],
    
    "ARMES": [
        {
            id: "360-2",
            name: "Vente d'arme sans licence",
            article: "Art. 360-2",
            prison: 10,
            prisonRP: 5,
            amende: 12500,
            category: "Crime",
            description: "Vendre des armes sans autorisation"
        },
        {
            id: "360-3",
            name: "Port d'arme illégal",
            article: "Art. 360-3",
            prison: 8,
            prisonRP: 5,
            amende: 5000,
            category: "Délit",
            description: "Port d'arme non déclarée ou sans numéro de série"
        },
        {
            id: "360-4",
            name: "Exhibition d'une arme",
            article: "Art. 360-4",
            prison: 2,
            prisonRP: 5,
            amende: 5000,
            category: "Délit",
            description: "Porter visiblement une arme en zone interdite"
        }
    ],
    
    "STUPEFIANTS": [
        {
            id: "370-2",
            name: "Trafic de drogues illicites",
            article: "Art. 370-2",
            prison: 10,
            prisonRP: 10,
            amende: 20000,
            category: "Crime",
            description: "Vente ou production de stupéfiants"
        },
        {
            id: "370-3",
            name: "Possession de stupéfiants",
            article: "Art. 370-3",
            prison: 5,
            prisonRP: 5,
            amende: 2500,
            category: "Délit",
            description: "Détention illicite de stupéfiants"
        }
    ],
    
    // PARTIE IV - ATTEINTES AUX BIENS
    "VOL": [
        {
            id: "410-1",
            name: "Vol de biens",
            article: "Art. 410-1",
            prison: 5,
            prisonRP: 5,
            amende: 5000,
            category: "Délit",
            description: "Obtenir un bien sans consentement"
        },
        {
            id: "410-1-aggr",
            name: "Vol aggravé",
            article: "Art. 410-1",
            prison: 15,
            prisonRP: 10,
            amende: 7500,
            category: "Crime",
            description: "Vol en bande, par agent, ou avec dégradations"
        },
        {
            id: "410-2",
            name: "Braquage",
            article: "Art. 410-2",
            prison: 20,
            prisonRP: 15,
            amende: 15000,
            category: "Crime",
            description: "Vol dans un commissariat, banque ou commerce"
        },
        {
            id: "410-3",
            name: "Extorsion / Racket",
            article: "Art. 410-3",
            prison: 10,
            prisonRP: 10,
            amende: 7500,
            category: "Crime",
            description: "Obtenir des biens par coercition"
        },
        {
            id: "410-4",
            name: "Escroquerie",
            article: "Art. 410-4",
            prison: 10,
            prisonRP: 10,
            amende: 5000,
            category: "Crime",
            description: "Tromperie pour obtenir des biens"
        },
        {
            id: "410-5",
            name: "Abus de confiance",
            article: "Art. 410-5",
            prison: 3,
            prisonRP: 3,
            amende: 5000,
            category: "Délit",
            description: "Détourner des biens confiés"
        },
        {
            id: "410-5-aggr",
            name: "Abus de confiance aggravé",
            article: "Art. 410-5",
            prison: 7,
            prisonRP: 7,
            amende: 7500,
            category: "Délit",
            description: "Contre association humanitaire ou personne vulnérable"
        },
        {
            id: "410-5-fonction",
            name: "Abus de confiance (mandataire public)",
            article: "Art. 410-5",
            prison: 10,
            prisonRP: 10,
            amende: 10000,
            category: "Crime",
            description: "Par un mandataire de justice ou du gouvernement"
        },
        {
            id: "410-6",
            name: "Détournement de fonds",
            article: "Art. 410-6",
            prison: 10,
            prisonRP: 10,
            amende: 40000,
            category: "Crime",
            description: "Détourner des fonds publics ou privés"
        }
    ],
    
    "PROPRIETE": [
        {
            id: "420-1",
            name: "Dégradation",
            article: "Art. 420-1",
            prison: 0,
            prisonRP: 0,
            amende: 2500,
            category: "Contravention",
            description: "Détériorer un bien d'autrui"
        },
        {
            id: "420-1-aggr",
            name: "Destruction",
            article: "Art. 420-1",
            prison: 0,
            prisonRP: 0,
            amende: 7500,
            category: "Contravention",
            description: "Détruire un bien d'autrui"
        },
        {
            id: "420-2",
            name: "Effraction",
            article: "Art. 420-2",
            prison: 5,
            prisonRP: 5,
            amende: 5000,
            category: "Délit",
            description: "Forcer une fermeture ou clôture"
        },
        {
            id: "420-2-aggr",
            name: "Effraction aggravée",
            article: "Art. 420-2",
            prison: 10,
            prisonRP: 10,
            amende: 7500,
            category: "Crime",
            description: "Avec vol, blessure ou dégradations"
        },
        {
            id: "420-3",
            name: "Intrusion",
            article: "Art. 420-3",
            prison: 5,
            prisonRP: 5,
            amende: 5000,
            category: "Délit",
            description: "Entrer sans consentement dans une propriété"
        },
        {
            id: "420-3-aggr",
            name: "Intrusion aggravée",
            article: "Art. 420-3",
            prison: 10,
            prisonRP: 10,
            amende: 10000,
            category: "Crime",
            description: "Avec arme ou dans domaine public"
        },
        {
            id: "420-4",
            name: "Atteinte à l'inviolabilité du domicile",
            article: "Art. 420-4",
            prison: 10,
            prisonRP: 0,
            amende: 25000,
            category: "Crime",
            description: "Agent public s'introduisant illégalement"
        },
        {
            id: "420-5",
            name: "Squat / Occupation illégale",
            article: "Art. 420-5",
            prison: 5,
            prisonRP: 5,
            amende: 10000,
            category: "Délit",
            description: "Occuper illégalement un bien immobilier"
        },
        {
            id: "420-5-aggr",
            name: "Squat aggravé",
            article: "Art. 420-5",
            prison: 10,
            prisonRP: 10,
            amende: 12500,
            category: "Crime",
            description: "Avec dégradations ou vols"
        },
        {
            id: "420-6",
            name: "Profanation",
            article: "Art. 420-6",
            prison: 2,
            prisonRP: 2,
            amende: 4500,
            category: "Délit",
            description: "Profaner un lieu de culte ou sépulture"
        },
        {
            id: "420-6-aggr",
            name: "Profanation aggravée",
            article: "Art. 420-6",
            prison: 3,
            prisonRP: 5,
            amende: 7500,
            category: "Délit",
            description: "Lors d'un service, site protégé, ou avec mineurs"
        },
        {
            id: "420-7",
            name: "Dépôt illégal",
            article: "Art. 420-7",
            prison: 0,
            prisonRP: 0,
            amende: 2500,
            category: "Contravention",
            description: "Déposer des déchets illégalement"
        },
        {
            id: "420-7-aggr",
            name: "Dépôt illégal (personne morale)",
            article: "Art. 420-7",
            prison: 0,
            prisonRP: 0,
            amende: 25000,
            category: "Contravention",
            description: "Dépôt organisé par une entreprise"
        }
    ],
    
    "ADMINISTRATION": [
        {
            id: "430-1",
            name: "Occupation illégale du domaine public",
            article: "Art. 430-1",
            prison: 1,
            prisonRP: 0,
            amende: 15000,
            category: "Délit",
            description: "Occuper l'espace public sans autorisation"
        },
        {
            id: "430-2",
            name: "Trouble anormal du voisinage",
            article: "Art. 430-2",
            prison: 0,
            prisonRP: 0,
            amende: 6000,
            category: "Contravention",
            description: "Placer un objet envahissant le bien d'autrui"
        },
        {
            id: "430-3",
            name: "Construction illégale",
            article: "Art. 430-3",
            prison: 0,
            prisonRP: 0,
            amende: 12000,
            category: "Contravention",
            description: "Construire sans permis"
        }
    ],
    
    // PARTIE V - ATTEINTES À LA NATION
    "TRAHISON": [
        {
            id: "510-2",
            name: "Séparatisme (civils)",
            article: "Art. 510-2",
            prison: 100,
            prisonRP: 60,
            amende: 30000,
            category: "Crime",
            description: "Volonté de détachement politique"
        },
        {
            id: "510-3",
            name: "Coup d'État",
            article: "Art. 510-3",
            prison: 100,
            prisonRP: 60,
            amende: 30000,
            category: "Crime",
            description: "Prise du pouvoir par moyens non constitutionnels"
        }
    ]
};

// ============================================
// CODE DE LA ROUTE DU TENNESSEE
// ============================================

const CODE_ROUTE = {
    "PREMIERE_CLASSE": [
        {
            id: "210-1",
            name: "Stationnement interdit",
            article: "Art. 210-1",
            amende: 540,
            category: "Contravention 1ère classe"
        },
        {
            id: "210-2",
            name: "Non présentation immédiate de documents",
            article: "Art. 210-2",
            amende: 540,
            category: "Contravention 1ère classe"
        },
        {
            id: "210-3",
            name: "Traversée illégale",
            article: "Art. 210-3",
            amende: 50,
            category: "Contravention 1ère classe"
        },
        {
            id: "210-4",
            name: "Détention du gilet à haute visibilité",
            article: "Art. 210-4",
            amende: 200,
            category: "Contravention 1ère classe"
        }
    ],
    
    "DEUXIEME_CLASSE": [
        {
            id: "310-1",
            name: "Défaut de feux adéquats",
            article: "Art. 310-1",
            amende: 540,
            category: "Contravention 2ème classe"
        },
        {
            id: "310-2",
            name: "Défaut de feux de détresse",
            article: "Art. 310-2",
            amende: 540,
            category: "Contravention 2ème classe"
        },
        {
            id: "310-3",
            name: "Usage abusif du klaxon",
            article: "Art. 310-3",
            amende: 540,
            category: "Contravention 2ème classe"
        },
        {
            id: "310-4",
            name: "Défaut d'usage de clignotants",
            article: "Art. 310-4",
            amende: 540,
            category: "Contravention 2ème classe"
        }
    ],
    
    "TROISIEME_CLASSE": [
        {
            id: "410-1",
            name: "Défaut de plaque d'immatriculation",
            article: "Art. 410-1",
            amende: 540,
            category: "Contravention 3ème classe"
        },
        {
            id: "410-2",
            name: "Excès de vitesse (2 à 9 mph)",
            article: "Art. 410-2",
            amende: 420,
            category: "Contravention 3ème classe"
        },
        {
            id: "410-2b",
            name: "Excès de vitesse (9 à 19 mph)",
            article: "Art. 410-2",
            amende: 600,
            category: "Contravention 3ème classe"
        },
        {
            id: "410-3",
            name: "Niveau de transparence des vitres",
            article: "Art. 410-3",
            amende: 800,
            category: "Contravention 3ème classe"
        },
        {
            id: "410-4",
            name: "Excès de vitesse eu égard aux circonstances",
            article: "Art. 410-4",
            amende: 540,
            category: "Contravention 3ème classe"
        }
    ],
    
    "QUATRIEME_CLASSE": [
        {
            id: "510-1a",
            name: "Excès de vitesse (20 à 29 mph)",
            article: "Art. 510-1",
            amende: 900,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-1b",
            name: "Excès de vitesse (30 à 39 mph)",
            article: "Art. 510-1",
            amende: 1000,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-2",
            name: "Non respect du feu tricolore",
            article: "Art. 510-2",
            amende: 800,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-3",
            name: "Non respect du stop",
            article: "Art. 510-3",
            amende: 800,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-4",
            name: "Distraction au volant",
            article: "Art. 510-4",
            amende: 800,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-5",
            name: "Sens interdit",
            article: "Art. 510-5",
            amende: 540,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-6",
            name: "Franchissement illégal de voie",
            article: "Art. 510-6",
            amende: 540,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-7",
            name: "Conduite alcoolisée (0,5 à 0,8 g/L)",
            article: "Art. 510-7",
            amende: 800,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-8",
            name: "Non-respect de la priorité aux piétons",
            article: "Art. 510-8",
            amende: 750,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-9",
            name: "Distance de sécurité",
            article: "Art. 510-9",
            amende: 540,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-11",
            name: "Défaut de maîtrise de son véhicule",
            article: "Art. 510-11",
            amende: 800,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-12",
            name: "État du véhicule",
            article: "Art. 510-12",
            amende: 800,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-13",
            name: "Port du casque obligatoire",
            article: "Art. 510-13",
            amende: 800,
            category: "Contravention 4ème classe"
        },
        {
            id: "510-14",
            name: "Port de la ceinture de sécurité",
            article: "Art. 510-14",
            amende: 800,
            category: "Contravention 4ème classe"
        }
    ],
    
    "CINQUIEME_CLASSE": [
        {
            id: "610-1",
            name: "Excès de vitesse (40+ mph)",
            article: "Art. 610-1",
            amende: 1500,
            category: "Contravention 5ème classe"
        },
        {
            id: "610-2",
            name: "Défaut d'assurance",
            article: "Art. 610-2",
            amende: 1500,
            category: "Contravention 5ème classe"
        }
    ],
    
    "DELITS_ROUTIERS": [
        {
            id: "710-1",
            name: "Conduite en état d'ivresse (+ 0,8 g/L)",
            article: "Art. 710-1",
            prison: 2,
            prisonRP: 0,
            amende: 4500,
            category: "Délit routier"
        },
        {
            id: "710-2",
            name: "Conduite dangereuse",
            article: "Art. 710-2",
            prison: 1,
            prisonRP: 0,
            amende: 3600,
            category: "Délit routier"
        },
        {
            id: "710-3",
            name: "Conduite avec défaut de permis",
            article: "Art. 710-3",
            prison: 1,
            prisonRP: 0,
            amende: 3000,
            category: "Délit routier"
        },
        {
            id: "710-4",
            name: "Conduite sous stupéfiants",
            article: "Art. 710-4",
            prison: 2,
            prisonRP: 0,
            amende: 7000,
            category: "Délit routier"
        },
        {
            id: "710-4-aggr",
            name: "Conduite sous stupéfiants + alcool (≥0,4 g/L)",
            article: "Art. 710-4",
            prison: 3,
            prisonRP: 0,
            amende: 9000,
            category: "Délit routier"
        },
        {
            id: "710-5",
            name: "Entrave à la circulation",
            article: "Art. 710-5",
            prison: 2,
            prisonRP: 0,
            amende: 4500,
            category: "Délit routier"
        },
        {
            id: "710-6",
            name: "Conduite malgré interdiction",
            article: "Art. 710-6",
            prison: 2,
            prisonRP: 0,
            amende: 4500,
            category: "Délit routier"
        }
    ]
};

// ============================================
// DONNÉES POUR MODULE CODES
// ============================================

const CODES_CONTENT = {
    "penal": {
        title: "Code Pénal du Tennessee",
        sections: CODE_PENAL
    },
    "route": {
        title: "Code de la Route du Tennessee",
        sections: CODE_ROUTE
    },
    "procedure-penale": {
        title: "Code de Procédure Pénale",
        content: `
            <h3>LIVRE I - DISPOSITIONS GÉNÉRALES</h3>
            <div class="code-article">
                <div class="article-number">Art. 100-1</div>
                <div class="article-title">Présomption d'innocence</div>
                <div class="article-content">
                    Toute personne poursuivie est considérée comme innocente tant qu'elle n'a pas été déclarée coupable.
                </div>
            </div>
            
            <h3>LIVRE II - DES ENQUÊTES ET DES CONTRÔLES D'IDENTITÉ</h3>
            <div class="code-article">
                <div class="article-number">Art. 210-1</div>
                <div class="article-title">Enquête de flagrance</div>
                <div class="article-content">
                    Est qualifié de crime ou délit flagrant le crime ou le délit qui se commet actuellement, ou qui vient de se commettre.
                    Durée : 8 jours, prolongeable 8 jours supplémentaires.
                </div>
            </div>
            
            <div class="code-article">
                <div class="article-number">Art. 222-1</div>
                <div class="article-title">Garde à vue</div>
                <div class="article-content">
                    Durée maximale : 24h, prolongeable jusqu'à 96h.<br>
                    Droits : avocat, silence, appel téléphonique.
                </div>
            </div>
            
            <div class="code-article">
                <div class="article-number">Art. 223-1</div>
                <div class="article-title">Perquisition</div>
                <div class="article-content">
                    Flagrance : pas de mandat nécessaire.<br>
                    Enquête préliminaire : mandat de perquisition obligatoire.
                </div>
            </div>
            
            <h3>LIVRE III - DE L'ACTION PUBLIQUE ET CIVILE</h3>
            <div class="code-article">
                <div class="article-number">Art. 310-2</div>
                <div class="article-title">Opportunité des poursuites</div>
                <div class="article-content">
                    Le procureur dispose d'une totale liberté pour engager des poursuites, proposer une alternative, ou classer sans suite.
                </div>
            </div>
            
            <div class="code-article">
                <div class="article-number">Art. 310-3</div>
                <div class="article-title">CRPC</div>
                <div class="article-content">
                    Comparution sur reconnaissance préalable de culpabilité.<br>
                    Conditions : délit ≤ 10 ans, réduction minimum 50%.
                </div>
            </div>
            
            <p style="margin-top: 2rem; font-style: italic; color: #666;">
                Consultez les documents complets pour l'intégralité des articles.
            </p>
        `
    },
    "civil": {
        title: "Code Civil",
        content: `
            <h3>LIVRE II - LE DROIT DES PERSONNES</h3>
            <div class="code-article">
                <div class="article-number">Art. 211-3</div>
                <div class="article-title">Majorité civile</div>
                <div class="article-content">
                    La majorité est fixée à vingt-et-un ans accompli.
                </div>
            </div>
            
            <div class="code-article">
                <div class="article-number">Art. 212-1</div>
                <div class="article-title">Droit au respect à sa vie privée</div>
                <div class="article-content">
                    Chacun a droit au respect de sa vie privée.
                </div>
            </div>
            
            <h3>LIVRE III - LE DROIT DE LA FAMILLE</h3>
            <div class="code-article">
                <div class="article-number">Art. 310-1</div>
                <div class="article-title">Mariage civil</div>
                <div class="article-content">
                    Le mariage civil est une union légale entre deux époux, de sexes différents ou de même sexe.
                </div>
            </div>
            
            <h3>LIVRE IV - LA RESPONSABILITÉ</h3>
            <div class="code-article">
                <div class="article-number">Art. 420-1</div>
                <div class="article-title">Responsabilité délictuelle</div>
                <div class="article-content">
                    Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.
                </div>
            </div>
            
            <p style="margin-top: 2rem; font-style: italic; color: #666;">
                Référez-vous à la documentation complète pour tous les articles.
            </p>
        `
    },
    "procedure-civile": {
        title: "Code de Procédure Civile",
        content: `
            <h3>LIVRE PREMIER - DISPOSITIONS GÉNÉRALES</h3>
            <div class="code-article">
                <div class="article-number">Art. 100-1</div>
                <div class="article-title">Action en justice</div>
                <div class="article-content">
                    Toute personne physique ou morale peut intenter une action en justice.
                </div>
            </div>
            
            <h3>LIVRE QUATRIÈME - DU JUGEMENT</h3>
            <div class="code-article">
                <div class="article-number">Art. 410-1</div>
                <div class="article-title">Compétence des districts judiciaires</div>
                <div class="article-content">
                    Les trente-et-un districts du circuit judiciaire ont compétence pour juger les litiges de leur district.
                </div>
            </div>
            
            <div class="code-article">
                <div class="article-number">Art. 420-1</div>
                <div class="article-title">Cour d'appel</div>
                <div class="article-content">
                    Délai d'appel : 10 jours à compter du prononcé de la décision.
                </div>
            </div>
        `
    },
    "commerce": {
        title: "Code du Commerce",
        content: `
            <h3>PARTIE I - ENTREPRENEURS</h3>
            <div class="code-article">
                <div class="article-number">Section B - Art. 1</div>
                <div class="article-title">Enregistrement obligatoire</div>
                <div class="article-content">
                    Toute activité commerciale doit être enregistrée au Registre du commerce.<br>
                    Sanction : 25.000$ d'amende maximum.
                </div>
            </div>
            
            <h3>PARTIE II - SOCIÉTÉS</h3>
            <div class="code-article">
                <div class="article-number">Art. 7</div>
                <div class="article-title">Secret des affaires</div>
                <div class="article-content">
                    Information protégée par une société. Divulgation : 50.000$ d'amende + 6 ans de détention.
                </div>
            </div>
            
            <h3>PARTIE IV - DISPOSITIONS SPÉCIALES</h3>
            <div class="code-article">
                <div class="article-number">Art. 6</div>
                <div class="article-title">Vente d'arme sans licence</div>
                <div class="article-content">
                    Sanction : 5.000$ d'amende + 10 ans de détention.
                </div>
            </div>
        `
    },
    "constitution": {
        title: "Constitution du Tennessee",
        content: `
            <h3>ARTICLE I - DÉCLARATION DES DROITS</h3>
            <div class="code-article">
                <div class="article-number">Section 1</div>
                <div class="article-title">Pouvoir du peuple</div>
                <div class="article-content">
                    Tout pouvoir est inhérent au peuple. Le gouvernement est fondé sur leur autorité.
                </div>
            </div>
            
            <div class="code-article">
                <div class="article-number">Section 3</div>
                <div class="article-title">Droit de porter des armes</div>
                <div class="article-content">
                    Les citoyens ont le droit de garder et de porter des armes pour leur défense commune.
                    Le législateur peut réglementer le port d'armes pour prévenir la criminalité.
                </div>
            </div>
            
            <h3>ARTICLE III - DÉPARTEMENT EXÉCUTIF</h3>
            <div class="code-article">
                <div class="article-number">Section 1</div>
                <div class="article-title">Gouverneur</div>
                <div class="article-content">
                    Le pouvoir exécutif est confié à un Gouverneur pour un mandat de six mois.
                    Maximum deux mandats consécutifs.
                </div>
            </div>
            
            <h3>ARTICLE IX - MESURES EXCEPTIONNELLES</h3>
            <div class="code-article">
                <div class="article-number">Section 2</div>
                <div class="article-title">État d'urgence</div>
                <div class="article-content">
                    Déclenché par le Gouverneur en cas de circonstances exceptionnelles.<br>
                    Permet : perquisitions sans mandat, couvre-feu, contrôles d'identité à grande échelle.
                </div>
            </div>
        `
    },
    "jurisprudence": {
        title: "Répertoire de Jurisprudence",
        content: `
            <div style="background: #F5F5F5; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                <p style="font-style: italic; line-height: 1.8;">
                    Le terme de jurisprudence désigne l'ensemble des décisions de justice relatives à une question juridique donnée. 
                    Le code pénal défini la jurisprudence comme permettant, dans un cas non couvert par la loi ou lorsque celle-ci est imprécise, 
                    à un tribunal de s'appuyer sur une décision prise dans un cas similaire par une juridiction supérieure ou à un article de loi similaire, 
                    pour condamner quelqu'un (Art. 120-4 TNCP).
                </p>
            </div>

            <h3 style="color: #C8102E; border-bottom: 3px solid #F4E5C3; padding-bottom: 0.5rem; margin-top: 2rem;">COUR SUPRÊME</h3>
            
            <div class="code-article">
                <div class="article-number">[P-2019-0701] BACKERWELL v. TAYLOR</div>
                <div class="article-content">
                    La cour estime qu'une publication émanant d'une personnalité politique affiliée à un parti politique, et ayant suscité un impact limité auprès du public, ne constitue pas une infraction aux dispositions régissant le processus électoral.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2019-0702] VALLIUM v. TENNESSEE GOVERNMENT</div>
                <div class="article-content">
                    La Cour considère que la restriction des événements religieux organisés sur la voie publique ne constitue pas une violation du Premier Amendement, dès lors qu'elle est justifiée par des impératifs de sécurité liés au risque de troubles à l'ordre public.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2019-1001] KIRKMAN & KELLER v. TENNESSEE IDENTITY</div>
                <div class="article-content">
                    La Cour estime qu'une déclaration d'un gouverneur portant sur le bilan de son action, réalisée en période électorale, ne saurait, en elle-même, être qualifiée de propagande politique ni constituer une violation des règles encadrant le processus électoral.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2020-0301] KELLER v. TENNESSEE GOVERNMENT</div>
                <div class="article-content">
                    La Cour considère que la promulgation d'un décret d'état d'urgence par le gouverneur doit impérativement reposer sur l'existence d'un doute raisonnable justifiant son adoption, au regard de la nature liberticide de cette mesure, et que ladite mesure doit être strictement encadrée dans ses dimensions temporelles et géographiques.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2020-0501] STEWART v. TNPD</div>
                <div class="article-content">
                    La Cour affirme que la police comtale conserve en toutes circonstances la prérogative exclusive de la direction des opérations lorsque celles-ci se font avec le concours les forces de police municipale.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2020-0701] WANG v. REPUBLICAN PARTY</div>
                <div class="article-content">
                    La Cour considère qu'il est interdit de cumuler deux rémunérations issues de mandats électifs et, par extension, d'exercer des prérogatives supplémentaires lorsque l'intéressé est déjà membre d'un organe exécutif.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2022-0101] TENNESSEE v. SHALL & MURPHY</div>
                <div class="article-content">
                    La Cour juge que la détention provisoire demeure conforme à la loi lorsqu'elle est ordonnée par le procureur général sur la base d'éléments suffisants et dûment motivés justifiant la privation de liberté de l'individu, et à condition qu'elle ne dépasse pas une durée de trente jours.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2022-0501] HILL v. TENNESSEE GOVERNMENT</div>
                <div class="article-content">
                    La Cour considère qu'un projet de loi doit être soumis à l'examen et à l'approbation de la Cour suprême afin de garantir sa conformité avec la Constitution des Etats-Unis et la Constitution de l'État du Tennessee.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-4574-7757] ROSS v. TENNESSEE GOVERNMENT</div>
                <div class="article-content">
                    La Cour estime qu'un acte isolé, déterminé par un service des forces de l'ordre, ne saurait raisonnablement justifier la déclaration de l'état d'urgence en raison des mesures liberticides dudit décret.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0601] Requête en inconstitutionnalité du 8 juin 2023</div>
                <div class="article-content">
                    La Cour considère que l'exhibition d'une arme à feu dans l'espace public (Open Carry) est inconstitutionnelle en raison des risques potentiels qu'elle engendre pour la sécurité de la communauté.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0602] DERRICK v. BROWN</div>
                <div class="article-content">
                    La Cour considère que le bureau du procureur relève toujours de l'exécutif, qu'une juridiction peut désigner un procureur spécial pour enquêter sur des infractions pénales commises par le gouverneur, tout en contrôlant l'action de ce dernier, que l'instruction, incluant la désignation d'un procureur spécial, est soumise au contrôle de la Cour Suprême de l'État du Tennessee, et que la procédure d'Impeachment constitue une procédure de responsabilité politique fondée exclusivement sur la responsabilité pénale.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0062] Saisine pour avis du 15 juillet 2023</div>
                <div class="article-content">
                    La Cour estime que la responsabilité pénale du gouverneur ne peut être engagée en raison de son immunité, mais que ses actions peuvent faire l'objet de poursuites civile au nom de l'institution qu'il représente, relevant de la responsabilité civile du gouvernement.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2024-0201] Saisine pour avis du 04 février 2024</div>
                <div class="article-content">
                    La Cour considère que, conformément à l'article susvisé, la commission d'impeachment, élue à chaque début de législature, dispose du pouvoir d'instruction et peut déclencher un procès en impeachment à l'unanimité de ses membres après avoir mené une instruction suffisante pour établir l'existence d'éléments justifiant cette procédure.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-S-000003] TENNESSEE GOVERNMENT v. BELFORT</div>
                <div class="article-content">
                    La Cour considère qu'une procédure de révocation initiée par le Gouverneur nécessite la validation de la Cour Suprême, qui doit constater un doute raisonnable lié à une ingérence ou un manquement grave dans l'exercice des fonctions du Procureur Général en respectant le principe du contradictoire, permettant au Procureur Général de produire un mémoire en défense, conformément au cadre constitutionnel et jurisprudentiel.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-S-000004] THEMIS LAWYER v. DCSO</div>
                <div class="article-content">
                    La Cour considère que le Sheriff peut adopter des mesures exceptionnelles pour la sécurité publique, sous réserve de leur légalité et du respect des prérogatives du Gouverneur. La fouille systématique est jugée contraire au Quatrième Amendement, sauf en cas de suspicions raisonnables ou d'enquêtes actives. Les restrictions sur la circulation sur les toits et la détention d'alcool sur la voie publique relèvent de sa compétence, dès lors qu'elles visent à prévenir des risques avérés pour la sécurité dont il en est le garant vis-à-vis des lois en vigueurs.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2024-1201] SHALL & CO v. TENNESSEE</div>
                <div class="article-content">
                    La Cour considère qu'un agent de la force publique, y compris au sein d'une unité spéciale, doit être identifiable par des moyens définis par sa hiérarchie, sauf en cas de cause probable de risque direct pour sa sécurité, et qu'il est tenu de fournir son identité policière en toutes circonstances, conformément aux exigences légales et constitutionnelles de transparence et de responsabilité.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2025-2401] MOORE & HOWARD v. TNGOP</div>
                <div class="article-content">
                    La Cour considère qu'un parti politique ne peut être qualifié d'entreprise au sens du Code du travail, réaffirmant son caractère intrinsèquement politique et excluant toute analogie avec un employeur de droit commun, conformément aux principes régissant les organisations à vocation politique et à l'exclusion explicite de telles entités du champ d'application des dispositions relatives au droit du travail.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[CS-2025-29325] TNGOP v. TENNESSEE</div>
                <div class="article-content">
                    La Cour confirme la constitutionnalité de la loi interdisant les armes automatiques, estimant qu'elle constitue une mesure légitime et proportionnée pour concilier sécurité publique et respect des droits constitutionnels. La Cour rappelle que le Deuxième amendement ne garantit pas un droit illimité de posséder toutes les catégories d'armes.
                </div>
            </div>

            <h3 style="color: #C8102E; border-bottom: 3px solid #F4E5C3; padding-bottom: 0.5rem; margin-top: 3rem;">COUR D'APPEL</h3>
            
            <div class="code-article">
                <div class="article-number">[18-981 BDRS] TENNESSEE v. JAMES</div>
                <div class="article-content">
                    La Cour considère qu'un département d'application de la loi ne peut être impliquée pour des mauvais traitements, des violences ou des sévices que des adjoints auraient causés durant l'exercice de leurs fonctions, seule la responsabilité pénale des adjoints peut être impliquée.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2020-1001] Saisine pour avis du 31 octobre 2020</div>
                <div class="article-content">
                    La Cour considère que la responsabilité d'un département d'application de la loi peut être engagée du fait des infractions commises, pour son compte, par l'un de ses organes ou représentants au sens du code de procédure pénale. En l'état il faut prouver que l'action des représentants légaux du département a causé une infraction ou une situation tendant inéluctablement à des dommages qui semblaient être évitables par l'intervention de ses derniers.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2020-1201] Saisine pour avis du 30 décembre 2020</div>
                <div class="article-content">
                    La Cour considère le fait de rentrer dans la propriété d'autrui pour lever un doute raisonnable qu'un crime ou délit est en train de se commettre n'autorise pas à effectuer une perquisition ou des saisies judiciaires puisqu'il s'agit d'une levée de doute — sauf s'il existe de manière évidente un fait manifestement illégal dans ladite propriété.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0601] DERRICK v. HOLLOWAY</div>
                <div class="article-content">
                    La Cour considère qu'un mandat de consultation de données médicales, couvertes par le secret médical, doit reposer sur un doute raisonnable et être explicitement limité aux actes à consulter, dans le strict cadre de la nécessité de l'instruction en cours.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[A-0306-2024] TENNESSEE v. O'FARELL</div>
                <div class="article-content">
                    La Cour considère qu'une erreur de plume ne saurait être qualifiée de vice de forme, et ne constitue dès lors pas un motif légitime pour en demander la rectification ou l'ajout sous forme d'addendum.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[A-2024-3007] TENNESSEE v. SECESSIONIST PARTY OF TENNESSEE</div>
                <div class="article-content">
                    La Cour reconnaît qu'une charge non transmise à la défense constitue un manquement procédural mais ne peut raisonnablement annuler l'entièreté des charges émises contre un prévenu, au regard de la jurisprudence existante.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[A-2024-0911] Saisine pour question de droit du 27 septembre 2024</div>
                <div class="article-content">
                    La Cour reconnaît que toute restriction à l'accès d'un avocat, justifiée par des motifs de sécurité ou des procédures internes, doit respecter un strict principe de proportionnalité sous peine d'être jugée inconstitutionnelle, et que, par ailleurs, un agent public ne peut invoquer le Cinquième Amendement pour refuser de s'identifier dans le cadre d'une procédure judiciaire, cette obligation étant essentielle à la transparence et à la responsabilité des fonctions publiques.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[A-2024-0912] Saisine pour question de droit du 30 septembre 2024</div>
                <div class="article-content">
                    La Cour reconnaît que le procureur, en sa qualité de directeur de l'enquête, peut émettre des injonctions contraignantes à l'encontre des agents de police judiciaire dans les strictes limites de leur mission d'enquête, à condition que ces injonctions respectent les principes de procédure et de droit, faute de quoi elles constitueraient une violation du due process ou un abus de pouvoir au sens du Code pénal de l'État du Tennessee.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[A-2024-0911 BIS] Saisine pour question de droit du 20 octobre 2024</div>
                <div class="article-content">
                    La Cour reconnaît que la Constitution doit être respectée par toutes les lois, règlements et décisions de justice, et que tout litige à son sujet relève de la compétence exclusive de la Cour Suprême de l'État du Tennessee, tout en rappelant que les limitations aux droits constitutionnels, notamment l'accès à un avocat ou la vérification d'identité, doivent respecter les principes de proportionnalité et de nécessité, et s'inscrire dans un cadre strictement réglementé afin de garantir une application rigoureuse des droits fondamentaux.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[A-P-2024-3007] DISTRICT COURT v. __ __</div>
                <div class="article-content">
                    La Cour considère que l'identification d'un adjoint devant un magistrat constitue en principe une obligation légale, dès lors que celui-ci demeure pénalement responsable et justiciable mais, en l'espèce, l'atteinte constitutionnelle constatée fait obstacle à l'opposabilité de cette exigence, privant ainsi son application de toute valeur contraignante et constate l'absence de fondement légal à l'accusation d'outrage formulée à l'encontre de l'appelant et, considérant la violation de ses droits fondamentaux, prononce en conséquence sa relaxe.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[PA-2025-4875] TENNESSEE V. OLSON</div>
                <div class="article-content">
                    La Cour considère que la procédure de « booking process » exige la communication des informations personnelles requises, de sorte que la limitations aux seules mentions de base (prénom, nom et adresse) constitue un refus d'identification répréhensible.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[AP-2025-5136] COHEN V. TWENTIETH DISTRICT COURT</div>
                <div class="article-content">
                    La Cour identifie deux grands principes relatifs à l'outrage à la Cour. D'abord, la condamnation pour outrage n'exonère jamais le juge de l'obligation de motiver sa décision sur les faits et leur qualification. Ensuite, un test directeur est dégagé : un avocat ne peut être déclaré coupable d'outrage que si (i) un avertissement explicite préalable lui a été donné par la Cour et (ii) il a volontairement cherché à perturber la séance ou à manquer de respect à la juridiction ; à défaut, l'immunité de robe prévaut.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[AP-2025-5136] JESUS COHEN V. TWENTIETH DISTRICT COURT</div>
                <div class="article-content">
                    La Cour considère qu'un outrage à la cour commis au cours d'une audience est soumis aux mêmes exigences qu'une décision juridictionnelle ordinaire ; dès lors, la Cour doit faire apparaître les motivations de cet outrage dans la décision prononçant la sanction.
                </div>
            </div>

            <h3 style="color: #C8102E; border-bottom: 3px solid #F4E5C3; padding-bottom: 0.5rem; margin-top: 3rem;">COUR DE DISTRICT</h3>
            
            <p style="margin: 1.5rem 0; font-style: italic; color: #666;">
                La jurisprudence de la Cour de District établit des précédents importants pour l'application quotidienne du droit dans le comté.
            </p>

            <div class="code-article">
                <div class="article-number">[P-2020-0208] TENNESSEE v. PRICE</div>
                <div class="article-content">
                    La Cour reconnaît que le seul fait d'injurier sur la voie publique autrui ne peut être constitutif d'un trouble à l'ordre public après contrôle de proportionnalité entre l'atteinte au 1er Amendement et le maintien de l'ordre public.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2020-0224] TENNESSEE v. LINCOLN</div>
                <div class="article-content">
                    La Cour estime qu'il ne saurait être considéré comme utilisation légitime et proportionnée de la force l'officier de police qui abat un individu menotté sous sa surveillance.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2020-0312] BCMC v. BRADFORD</div>
                <div class="article-content">
                    La Cour considère qu'il est obligatoire pour un officier dans l'exercice de ses fonctions d'être identifiable et de s'identifier.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2020-0821] BCSD v. BISHOP</div>
                <div class="article-content">
                    La Cour considère que la suspension immédiate des fonctions d'un agent est justifiée lorsqu'un doute raisonnable existe quant à la violation de ses obligations contractuelles, déontologiques et d'assermentation.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2020-1011] STEWART v. KYLE</div>
                <div class="article-content">
                    La Cour considère qu'un représentant de l'État, indépendamment de son appartenance partisane, doit avoir accès aux informations relevant de son champ de compétence, dans le respect de ses prérogatives et de sa fonction élective, et ne doit pas être entravé dans cet exercice et accès pour des motifs partisans.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2020-1108] SHALL v. BCSD</div>
                <div class="article-content">
                    La Cour estime qu'un avocat inscrit au barreau doit être en mesure de démontrer son affiliation au barreau de l'État du Tennessee, en raison de sa fonction protégée par la loi.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2021-0116] TENNESSEE v. ROY</div>
                <div class="article-content">
                    La Cour considère qu'un prévenu est coupable de dégradation en entravant l'usage normal de l'espace public et d'occupation illégale du domaine public en exerçant une activité sans autorisation appropriée par l'instance agréée.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2021-0207] WILSTON v. AUGHER</div>
                <div class="article-content">
                    La Cour considère qu'une personne se rend coupable de harcèlement lorsqu'elle persiste à exercer une pression, par des messages ou autres moyens, après que la victime ait exprimé son malaise.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2021-0603] TENNESSEE v. MEADORS & LOWRENCE</div>
                <div class="article-content">
                    La Cour considère que le trouble à l'ordre public de manière concertée en perturbant les fonctions des officiers de police constitue une prévenance à la circonstance aggravante.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2021-0604] TENNESSEE v. SIMS, SMITH & COLE</div>
                <div class="article-content">
                    La Cour précise, en complément de la jurisprudence TENNESSEE v. MEADORS & LOWRENCE, qu'une circonstance aggravante s'applique lorsque des dispositifs incendiaires sont utilisés dans le cadre d'un trouble à l'ordre public.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2021-0712] TENNESSEE v. GEORGE</div>
                <div class="article-content">
                    La Cour considère qu'une menace ne peut être raisonnablement qualifiée d'infraction lorsque celle-ci s'inscrit dans le cadre d'une légitime défense, sauf si son usage manifeste un caractère disproportionné au regard des circonstances.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[CI-2021-0010] TENNESSEE v. JENKINS</div>
                <div class="article-content">
                    La Cour considère que la doctrine du château (Castle Doctrine) ne peut s'appliquer à un habitat occupé de manière illicite, tel qu'un squat sur la voie publique, celui-ci ne pouvant être reconnu comme une possession légitime et exclu du champ d'application du Quatrième Amendement.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[HABEAS CORPUS] TENNESSEE v. CAMERON & OWENS</div>
                <div class="article-content">
                    La Cour considère que l'absence d'identification d'un membre de l'exécutif rend ses actes juridiquement nuls, autorisant ainsi toute personne concernée à s'en défendre précisant que le port d'un uniforme, d'un badge visible ou l'utilisation d'un véhicule clairement identifiable constituent des moyens valides d'identification.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2021-1021] TENNESSEE v. CART</div>
                <div class="article-content">
                    La Cour considère que le non-respect des ordonnances judiciaires et la présentation tardive de preuves non communiquées à la partie adverse constituent des manquements graves au principe du contradictoire et à l'autorité des juridictions, justifiant l'imposition de sanctions et la notification aux instances disciplinaires compétentes.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0401] TENNESSEE v. HUSTON (audience préliminaire)</div>
                <div class="article-content">
                    La Cour souligne deux principes distincts : d'une part, les éléments constitutifs d'un arrêt de travail valent attestation médicale, à condition qu'ils soient dûment signés par un médecin formellement identifié ; d'autre part, l'identité des officiers de police appelés à témoigner dans une procédure légale ne peut être confidentielle, sauf si sa divulgation met en péril leur sécurité.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0401] TENNESSEE v. HUSTON</div>
                <div class="article-content">
                    La Cour considère que la seule préparation d'un dispositif incendiaire ne peut être assimilée à une préméditation reconnaissant toutefois que la fabrication d'un dispositif incendiaire spécifiquement conçu dans le but manifeste de commettre un meurtre constitue une préméditation.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0701] TENNESSEE v. NASHTON</div>
                <div class="article-content">
                    La Cour reconnaît que la fonction d'avocat, protégée par la Constitution et les lois de l'État du Tennessee, ne peut être usurpée sous peine de sanctions pénales, et que dans des cas où un prévenu est manifestement trompé par fraude ou escroquerie dans un domaine où il n'a pas les compétences nécessaires, une circonstance atténuante peut être retenue, à condition que la fraude soit établie de manière convaincante.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0703] TENNESSEE v. NORKOV</div>
                <div class="article-content">
                    La Cour reconnaît que l'aveu complet d'actes criminels graves, associé à une absence manifeste de remords et à un comportement représentant un danger récurrent pour la communauté, constitue un motif suffisant pour exclure toute possibilité de réinsertion et justifie une peine de mort au regard de la protection de la communauté.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0804] TANAKA v. DCSO</div>
                <div class="article-content">
                    La Cour reconnaît que la réalisation d'une fouille requiert une justification fondée sur un doute raisonnable, et qu'en outre aucune entité exécutive n'est habilitée à ordonner une fouille systématique et aléatoire des biens et des individus sans une justification préalable, conformément aux prescriptions du sixième amendement de la Constitution des États-Unis.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-1002] TENNESSEE v. SANCHEZ-SALDANA</div>
                <div class="article-content">
                    La Cour reconnaît une prévenance spécifique à la circonstance atténuante lorsqu'un prévenu subit des changements significatifs dans son environnement de vie et recommande la réintégration, sous réserve que l'accusé ne présente pas de menace pour la communauté ni pour lui-même.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-1102] TENNESSEE v. TYLLER</div>
                <div class="article-content">
                    La Cour reconnaît qu'une personne est pénalement responsable tant que sa conscience ou sa responsabilité n'a été légitimement mise en cause par une personne qualifiée et certifiée de cet État.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-1003] TENNESSEE v. STUART & TYRONE</div>
                <div class="article-content">
                    La Cour reconnait une prévenance spécifique à la circonstances aggravantes lorsqu'un meurtre est commit sur un agent des forces de l'ordre agissant dans l'exercice de ses fonctions.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2024-0204] SLATER v. BELFORT</div>
                <div class="article-content">
                    La Cour établit deux principes distincts : d'une part, le représentant du ministère public dispose de l'autorité pour solliciter des sanctions pénales, sous réserve de leur conformité avec le Huitième Amendement ; d'autre part, il revient au magistrat de vérifier cette conformité constitutionnelle en homologuant ces demandes ou en les modifiant si nécessaire.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2023-0902] TENNESSEE v. PARKER</div>
                <div class="article-content">
                    La Cour reconnaît qu'un prévenu ne peut être condamné au motif d'un refus de se soumettre à l'injonction d'un officier de police lorsque celui-ci se situe dans son domicile dûment protégé par le Quatrième amendement de la Constitution des États-Unis au-delà de tout doute raisonnable.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2024-0727] TENNESSEE v. LAÏKA</div>
                <div class="article-content">
                    La Cour considère que, dans le respect du principe fondamental d'égalité des armes, toute partie doit être informée en temps utile de l'audience et des éléments de preuve produits, et que tout manquement à cette obligation justifie, en l'absence d'annulation du procès, le report de l'audience afin de permettre la préparation adéquate de la défense.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2024-0011] RITWOOL v. MBIZI COHEN</div>
                <div class="article-content">
                    La Cour considère qu'en l'absence de preuve d'un contrat signé par les parties ou de l'acceptation explicite des conditions d'un code déontologique, aucun engagement contractuel ou déontologique ne peut être valablement opposé, et que les demandes de motions doivent respecter des contraintes temporelles permettant leur examen équitable.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2024-1001] TENNESSEE v. PAPET</div>
                <div class="article-content">
                    La Cour considère que les jours d'interruption temporaire de travail doivent être dûment enregistrés et certifiés par un médecin dûment autorisé à exercer dans l'État, sans égard pour des considérations personnelles, conformément aux principes établis dans la jurisprudence STATE OF TENNESSEE v. HUSTON.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2024-0801] HARRIS v. MABROUK & TENNESSEE STATE NEWS</div>
                <div class="article-content">
                    La Cour considère qu'un journal ne peut être tenu pour responsable de fausses déclarations diffamatoires sur la conduite officielle d'un fonctionnaire, sauf en cas d'intention réelle de nuire, tout en rappelant que tout média a l'obligation de vérifier la véracité des informations obtenues de ses sources avant publication, afin d'éviter toute indifférence imprudente à la vérité et d'engager sa responsabilité en cas de diffamation.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[CI-2024-1101] TENNESSEE v. GAMBINO</div>
                <div class="article-content">
                    La Cour reconnaît que la négligence manifeste d'un conducteur, qui enfreint les règles de sécurité routière et met en danger la vie d'autrui, constitue un élément suffisant pour établir la responsabilité pénale pour homicide involontaire, même en l'absence d'une intention malveillante.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2024-0912] SHALL & CO v. DCSO</div>
                <div class="article-content">
                    La Cour reconnaît qu'un procureur, en raison de son devoir de neutralité et de préservation de l'intérêt public, ne peut assurer la défense d'une personne morale et ou physique dans une procédure pénale, car une telle implication compromettrait les principes fondamentaux d'équité et d'impartialité garantis par le droit à un procès équitable.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-P-00004] TENNESSEE v. CAMERON</div>
                <div class="article-content">
                    La Cour estime que l'utilisation intentionnelle d'un document falsifié, dans le but de tromper, par un membre de la justice ou de l'exécutif, constitue un acte de faux et d'usage de faux, même si cet acte est motivé par une intention jugée bonne et que la tromperie procédurale, lors d'un interrogatoire, comme une violation constitutionnelle sauf si elle engendre une contrainte ou affecte la nature volontaire des aveux.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-P-2024-0030] TENNESSEE v. DCSO (référé)</div>
                <div class="article-content">
                    La Cour considère que la coopération active entre le Bureau du Procureur et le département du Shérif est une obligation essentielle au respect des droits constitutionnels garantis par la Constitution, imposant la communication des documents nécessaires à l'administration de la justice, l'accès aux locaux sous conditions de sécurité raisonnables, et la supervision des enquêtes urgentes par le Procureur, tout en autorisant des restrictions strictement encadrées à l'utilisation des infrastructures ou des ressources partagées.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-P-2024-0035] TENNESSEE v. CARTER</div>
                <div class="article-content">
                    La Cour considère que les preuves obtenues lors d'une perquisition sans mandat ni identification des agents sont irrecevables, et estime qu'un individu agissant en légitime défense de son domicile est exonéré de toute responsabilité pour mise en danger de la vie d'autrui, en vertu de la doctrine du château (Doctrine Castel).
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-P-2024-0035] TENNESSEE v. WEST</div>
                <div class="article-content">
                    La Cour considère qu'il ne peut être refusé l'accès à un bâtiment public d'un département d'application de la loi à un membre du Bureau du Procureur dans l'exercice de ses fonctions.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[HABEAS CORPUS] TENNESSEE v. BEYCKERS</div>
                <div class="article-content">
                    La Cour considère qu'une erreur mineure sur une pièce de procédure effectuée et exécutée de bonne foi par un département d'application de la loi et n'impactant pas la procédure ou les droits constitutionnels des parties ne constitue pas un vice de procédure. Il convient de prendre en compte l'exception de bonne foi dès lors que les adjoints n'ont pas agi de manière négligente ou intentionnellement illégale.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2025-2401] WANG V. TENNESSEE</div>
                <div class="article-content">
                    La Cour considère que les comptes de réseaux sociaux gérés par des entités publiques peuvent être qualifiés de « forum publics » dès lors qu'ils permettent et encouragent l'interaction entre le gouvernement et les citoyens. Un tel forum, bien que numérique, est soumis aux garanties constitutionnelles du Premier amendement : les restrictions et discriminations sur la base du point de vue sont interdites.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2024-0028] WEST v. JACOBS</div>
                <div class="article-content">
                    La Cour considère qu'un juge dans l'exercice de ses fonctions et en sa qualité de juge ne peut se voir poursuivre pour des décisions prises dans l'exercice de ses fonctions ou le rendu de la justice et ce, même si en exerçant son autorité dans une procédure judiciaire en sa qualité de juge ce dernier a pu commettre des erreurs ou une mauvaise interprétation du droit, celui-ci ne pourrait se voir poursuivie.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[OUTRAGE] TWENTIETH'S JUDICIAL CIRCUIT OF TENNESSEE V. WELLS</div>
                <div class="article-content">
                    La Cour considère que la certification officielle du compte d'un juge constitue une extension de ses fonctions juridictionnelles et qu'ainsi, toute offense proférée à son encontre sur ce compte est assimilable à un outrage à magistrat et relève du délit d'outrage à la Cour.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[HABEAS CORPUS] TENNESSEE v. BENNETT</div>
                <div class="article-content">
                    La Cour considère que durant un contrôle d'identité dûment motivé par une cause probable la force publique à le droit de recourir à la contrainte et l'entrave dans le cadre strict de proportionnalité et de manière raisonnable. La Force publique doit prouver la nécessité de cette entrave dans un cadre sécuritaire. La Cour considère que la présence hostile d'une foule à l'action de la force publique autorise cette dernière à prendre des mesures de sécurité temporaire pour garantir la sécurité de tous les participants d'un contrôle [...] y compris le déplacement de la personne contrôlée à la station du shérif le temps strictement nécessaire à son contrôle d'identité.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[HABEAS CORPUS] TENNESSEE v. SKULL</div>
                <div class="article-content">
                    La Cour considère que, une fouille réalisée avant la notification des droits, dans un contexte tendu, n'entache pas la régularité de la procédure si la notification intervient dans un délai légal à compter d'un contrôle d'identité effectif, conformément à la jurisprudence Miranda v. Arizona et à l'article 222-2 du Code pénal. La citation de ces droits doit intervenir avant tout interrogatoire.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[P-2025-1204] TENNESSEE JUDICIARY COURT v. LANGFORD & KENSINGTON</div>
                <div class="article-content">
                    La Cour considère que, des propos insultant tenus l'égard des institutions judiciaires de l'État constituent un outrage à la justice dès lors qu'ils sont tenus sur une plateforme télévisée. La Cour rappelle néanmoins le caractère fondamental de la liberté d'expression tout en affirmant qu'elle ne peut être utilisé légitimement pour discréditer la Cour.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[CI-2025-0158] TENNESSEE v. BRADFORD</div>
                <div class="article-content">
                    La Cour considère que la non communication du dossier de preuves à la partie adverse constitue une violation du principe du contradictoire, entraînant par conséquent la nullité de la procédure.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[HABEAS CORPUS] TENNESSEE v. DANTE</div>
                <div class="article-content">
                    La Cour considère que des violences physiques subies durant une garde à vue sont de nature à porter atteinte à la dignité et aux droits constitutionnels de la personne détenue motivant l'annulation de sa garde à vue.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[HABEAS CORPUS] TENNESSEE v. ILLESCAS</div>
                <div class="article-content">
                    La Cour rappelle le droit fondamental à une défense effective, affirmant que l'avocat d'une personne placée en garde à vue doit avoir accès aux informations essentielles de la procédure, notamment les faits reprochés, la cause probable du placement, l'avis de garde à vue et l'identité de l'officier en charge. Par ailleurs, elle précise que le ministère public est tenu de transmettre le dossier d'accusation dans un délai raisonnable dès l'inculpation, garantissant ainsi le respect des droits de la défense et le principe du procès équitable.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[C-2026-3265] In re K9 Sniff, 20th District, 2026</div>
                <div class="article-content">
                    La Cour considère que le reniflement d'une personne par un chien de détection constitue une fouille lorsqu'il est précédé ou accompagné d'une immobilisation physique, même brève, de la personne. Une telle mesure ne peut être légalement mise en œuvre qu'en présence d'un doute raisonnable préalable et dans le respect des principes de nécessité et de proportionnalité. En revanche, un reniflement strictement fortuit, sans immobilisation ni ciblage, lorsque le chien marque spontanément en passant à proximité, ne constitue pas en lui-même une fouille.
                </div>
            </div>

            <div class="code-article">
                <div class="article-number">[HC-2025-349012] MARLON M. HOBSON V. STATE OF TENNESSEE</div>
                <div class="article-content">
                    La Cour considère que la garde à vue est un acte d'enquête fondé sur une suspicion raisonnable et proportionnée au but poursuivi par l'enquête. Elle ne met donc pas en œuvre le principe de non bis in idem. Enfin, les charges décrites dans un rapport de police ne relèvent pas du pouvoir discrétionnaire du Bureau du Procureur d'apprécier l'opportunité des poursuites et, de ce fait, ne sauraient avoir d'effet incriminant.
                </div>
            </div>

            <p style="margin-top: 2rem; font-style: italic; color: #666;">
                Ce répertoire constitue une compilation des décisions juridictionnelles majeures des trois niveaux de juridiction du Tennessee.
                Pour toute question d'interprétation, référez-vous aux décisions originales complètes.
            </p>
        `
    }
};
