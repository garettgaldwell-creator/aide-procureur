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
            <h3>COUR SUPRÊME</h3>
            <div class="code-article">
                <div class="article-number">[P-2020-0701] WANG v. TENNESSEE GOVERNMENT</div>
                <div class="article-content">
                    La restriction des événements religieux sur la voie publique ne viole pas le Premier Amendement 
                    si justifiée par la sécurité et le risque de troubles à l'ordre public.
                </div>
            </div>
            
            <div class="code-article">
                <div class="article-number">[P-2023-0601] Requête en inconstitutionnalité</div>
                <div class="article-content">
                    L'exhibition d'une arme à feu dans l'espace public (Open Carry) est inconstitutionnelle 
                    en raison des risques pour la sécurité de la communauté.
                </div>
            </div>
            
            <h3>COUR D'APPEL</h3>
            <div class="code-article">
                <div class="article-number">[P-2023-0601] DERRICK v. HOLLOWAY</div>
                <div class="article-content">
                    Un mandat de consultation de données médicales doit reposer sur un doute raisonnable 
                    et être explicitement limité aux actes à consulter.
                </div>
            </div>
            
            <h3>COUR DE DISTRICT</h3>
            <div class="code-article">
                <div class="article-number">[P-2023-0401] TENNESSEE v. HUSTON</div>
                <div class="article-content">
                    L'identité des officiers de police ne peut être confidentielle lors d'une procédure légale, 
                    sauf si sa divulgation met en péril leur sécurité.
                </div>
            </div>
            
            <p style="margin-top: 2rem; font-style: italic; color: #666;">
                Consultez le répertoire complet pour toutes les jurisprudences.
            </p>
        `
    }
};
