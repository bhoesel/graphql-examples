
// Generated at 2023-11-16 15:56:16 --

import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLError } from 'graphql'
import { Prisma } from '@prisma/client'
import type {
  Taxtaxatie
, Wozbelang
, Wozbelangcyclus
, Wozdeelobject
, Wozdeelobjectcode
, Wozdeelobjectcyclus
, Wozobject
, Wozobjectcyclus
, Wozsrtobjectcode
} from '@prisma/client'
import type { GraphQLContext } from './context'

const typeDefinitions = /* GraphQL */ `
  type Taxtaxatie {
    taxatienr: ID!
    objectnr: Int
    tijdvaknr: Int
    ddsituatie: String
    taxredencode: String
    cbsvrijsteldom: String
    indwoning: String
    resultaatdom: String
    srtobjectcode: String
    indreferentie: String
    gebouwddom: String
    ddvastgesteld: String
    ddtaxatie: String
    indcourant: String
    monumentcode: String
    stopcode: String
    adresbenamingnr: Int
    omschrijving: String
    broncode: String
    transactienr: Int
    euwoz: Int
    eutaxatie: Int
    euozb: Int
    eugebouwd: Int
    jjbouw: Int
    jjbouwrange: String
    jjrenovatie: Int
    pprenovatie: Int
    ppgereed: Int
    subjectnreig: Int
    subjectnrgeb: Int
    bouwlaagtoegang: String
    groepaanduiding: String
    groepnr: Int
    bijzwaarderingsdom: String
    waardvoorschriftdom: String
    omzetbelastingdom: String
    indvervallen: String
    ttopvoer: String
    ttmutatie: String
    resultaatcontroledom: String
    ppstijging: Int
    taxcompromiscode: String
    eucompromiswoz: Int
    eucompromisozb: Int
    ddtoestand: String
    euozbgn: Int
    bouwtypecode: String
    euprognose: Int
    indgebouwd: String
    inpandigdom: String
    taxverslagdom: String
    eucompromisozbgn: Int
    doelmatigheiddom: String
    functionaliteitdom: String
    kwaliteitdom: String
    leegstandsrisicodom: String
    liggingdom: String
    locatiedom: String
    onderhouddom: String
    uitstralingdom: String
    voorzieningdom: String
    euprognosegebr: String
    waardegebiedcode: String
    ttwozwijziging: String
    gebruiktemethodiekdom: String
    identificatietvs: String
    taxatiebrondom: String
    procesmutatie: String
  }

  type Wozbelang {
    belangnr: ID!
    ttingangreg: String
    ingangregnr: Int
    ingangstatusdom: String
    tteindereg: String
    einderegnr: Int
    eindestatusdom: String
    aandeigenaargebrdom: String
    stopcode: String
    ttopvoer: String
    ttmutatie: String
    procesmutatie: String
    wozbelangcyclus: [Wozbelangcyclus]
  }

  type Wozbelangcyclus {
    belangcyclusnr: ID!
    ttingangreg: String
    ingangregnr: Int
    ingangstatusdom: String
    tteindereg: String
    einderegnr: Int
    eindestatusdom: String
    ttingang: String
    tteinde: String
    subjectnr: Int
    indinonderzoek: String
    belangstatusdom: String
    indcumsuis: String
    zakelijkrechtcode: String
    broncode: String
    groeprelcode: String
    ttopvoer: String
    ttmutatie: String
    ddconstatering: String
    redenconstateringcode: String
    procesmutatie: String
  }

  type Wozdeelobject {
    deelobjectnr: ID!
    ttingangreg: String
    ingangregnr: Int
    ingangstatusdom: String
    tteindereg: String
    einderegnr: Int
    eindestatusdom: String
    nummer: Int
    usermutatie: String
    ttopvoer: String
    ttmutatie: String
    indwoz: String
    indtaxatie: String
    ouderdeelobject: Int
    procesmutatie: String
    wozdeelobjectcyclus: [Wozdeelobjectcyclus]
  }

  type Wozdeelobjectcode {
    deelobjectcode: ID!
    indvervallen: String
    ttopvoer: String
    ttmutatie: String
    usermutatie: String
    ddingang: String
    ddeinde: String
    omschrijving: String
    omschrijvingverkort: String
    srtdeeldom: String
    eenheiddom: String
    vrijstelcode: String
    itzafactor: Int
    ppfactortondom: String
    eenheidtondom: String
    opptondom: String
    inhoudtondom: String
    aantaltondom: String
    waardetondom: String
    laagtondom: String
    bouwjaartondom: String
    aantekeningtondom: String
    itzafactortondom: String
    maatvoeringtondom: String
    huurprijstondom: String
    kapfactortondom: String
    vrijstellingtondom: String
    pprenovatietondom: String
    onderhoudtondom: String
    kwaliteittondom: String
    modeltypedom: String
    eudefault: Int
    stuftaxonderdeelcode: String
    breedtetondom: String
    hoogtetondom: String
    lengtetondom: String
    doelmatigheidtondom: String
    uitstralingtondom: String
    afrondfactortondom: String
    afrondfactor: Int
    indgebouwd: String
    indwoning: String
    euminimum: Int
    indwoz: String
    indtaxatie: String
    indvmlmuteren: String
    indvmlverwijderen: String
    indvmltoelichting: String
    liggingdom: String
    kwaliteitdom: String
    onderhouddom: String
    doelmatigheiddom: String
    uitstralingdom: String
    voorzieningendom: String
    ppmarktontwikkeling: Int
    formule: String
    indtonenfront: String
    defaulttaxmethodiekdom: String
    indbagoppervlakteovernemen: String
    indbagbouwjaarovernemen: String
    indbagobjectovernemen: String
    defaultfunctionaliteitdom: String
    defaultleegstandsrisicodom: String
    defaultlocatiedom: String
    defaultbrutonettoinhdom: String
    defaultbrutonettooppdom: String
    defaultdeelobjectstatusdom: String
    defaultarchetypecode: String
    defaultomzetbelastingdom: String
    indmeetellenoppervlakte: String
    indmeetelleninhoud: String
    indoverschrijvenmodeldeelobj: String
    indbagobjectverplicht: String
    procesmutatie: String
    voorzieningentondom: String
    liggingtondom: String
  }

  type Wozdeelobjectcyclus {
    deelobjectcyclusnr: ID!
    ttingangreg: String
    ingangregnr: Int
    ingangstatusdom: String
    tteindereg: String
    einderegnr: Int
    eindestatusdom: String
    ttingang: String
    tteinde: String
    jjbouw: Int
    bouwlaag: Int
    ontslverdiepingdom: String
    aakamers: Int
    bouwjaarklasse: String
    jjrenovatie: Int
    pprenovatie: Int
    doelmatigheiddom: String
    uitstralingdom: String
    voorzieningdom: String
    onderhouddom: String
    kwaliteitdom: String
    inhoud: Int
    brutonettoinhdom: String
    oppervlakte: Int
    brutonettooppdom: String
    lengte: Int
    breedte: Int
    hoogte: Int
    frontbreedte: Int
    aantal: Int
    aantekening: String
    deelobjectstatusdom: String
    bagmemo: String
    archetypecode: String
    omzetbelastingdom: String
    vrijstelcode: String
    groepnr: Int
    omschrijving: String
    taxonderdeelnr: Int
    usermutatie: String
    ttopvoer: String
    ttmutatie: String
    taxmethodiekdom: String
    indwoning: String
    pandbagid: String
    verblijfsobjectbagid: String
    standplaatsbagid: String
    ligplaatsbagid: String
    omschrijvingaanvullend: String
    vrijveld1: String
    vrijveld2: String
    vrijveld3: String
    vrijveld4: String
    vrijveld5: String
    vrijveld6: String
    vrijveld7: String
    vrijveld8: String
    vrijveld9: String
    vrijveld10: String
    vrijveld11: String
    vrijveld12: String
    vrijveld13: String
    vrijveld14: String
    vrijveld15: String
    vrijveld16: String
    vrijveld17: String
    vrijveld18: String
    vrijveld19: String
    vrijveld20: String
    indprimair: String
    liggingdom: String
    functionaliteitdom: String
    leegstandsrisicodom: String
    locatiedom: String
    indprimairtaxatie: String
    ppfactor: Int
    clusternr: Int
    nraanduidingbagid: String
    zone: String
    gebroppervlakte: Int
    meerekenengvwhwkdom: String
    redennietkoppelenbagobject: String
    deelobjectgeometrienr: Int
    ppgereed: Int
    energielabeldom: String
    procesmutatie: String
    wozdeelobjectcode: Wozdeelobjectcode
  }

  type Wozobject {
    objectnr: ID!
    ttingangreg: String
    ingangregnr: Int
    ingangstatusdom: String
    tteindereg: String
    einderegnr: Int
    eindestatusdom: String
    wozobjectsrtdom: String
    wozobjectnr: String
    stopcode: String
    usermutatie: String
    ttopvoer: String
    ttmutatie: String
    indcluster: String
    procesmutatie: String
    indberichtenverkeer: String
    wozobjectcyclus: [Wozobjectcyclus]
    taxtaxatie: [Taxtaxatie]
    wozdeelobject: [Wozdeelobject]
    wozbelang: [Wozbelang]
  }

  type Wozobjectcyclus {
    objectcyclusnr: ID!
    ttingangreg: String
    ingangregnr: Int
    ingangstatusdom: String
    tteindereg: String
    einderegnr: Int
    eindestatusdom: String
    ttingang: String
    tteinde: String
    omschrijving: String
    gemeentecode: String
    oppgrond: Int
    gebruiksdom: String
    gebouwddom: String
    omzetbelastingdom: String
    bouwstroomcode: String
    indinonderzoek: String
    waardegebiedcode: String
    wozobjectstatusdom: String
    monumentdom: String
    vrijstelcode: String
    bijzwaarderingsdom: String
    groepnr: Int
    indlift: String
    liggingdom: String
    ontbrekennutsdom: String
    stijlletter: String
    bouwtypecode: String
    runselectienr: Int
    indgbamuteer: String
    broncode: String
    ppgereed: Int
    primairdeelobjectnr: Int
    indcourant: String
    indbemalen: String
    nraanduidingnr: Int
    identaanvullend: String
    openbareruimtebagid: String
    nraanduidingbagid: String
    omschrijvingaanvullend: String
    usermutatie: String
    ttopvoer: String
    ttmutatie: String
    doelmatigheiddom: String
    kwaliteitdom: String
    onderhouddom: String
    uitstralingdom: String
    voorzieningdom: String
    functionaliteitdom: String
    leegstandsrisicodom: String
    locatiedom: String
    waterschapcode: String
    inonderzoeknr: Int
    oppmeegetaxeerd: Int
    verblijfsobjectbagid: String
    standplaatsbagid: String
    ligplaatsbagid: String
    werkgebiedtaxateurcode: String
    werkgebiedcontrollercode: String
    taxateur: String
    werkvoorbereider: String
    lozingtypedom: String
    lozingcode: String
    objectgeometrienr: Int
    vrijkenmerkcode: String
    procesmutatie: String
    wozsrtobjectcode: Wozsrtobjectcode
  }

  type Wozsrtobjectcode {
    srtobjectcode: ID!
    indvervallen: String
    ttopvoer: String
    ttmutatie: String
    usermutatie: String
    ddingang: String
    ddeinde: String
    omschrijving: String
    gebruiksdom: String
    indwoning: String
    indgbawoning: String
    indgba: String
    indcontrvreovl: String
    gebouwddom: String
    omschrijvingverkort: String
    categoriecode: String
    subcategoriecode: String
    indwonwozgebruik: String
    indstufafval: String
    indkvk: String
    stfgebruiksdom: String
    stfgebouwddom: String
    indexporteerortax: String
    procesmutatie: String
  }

  type Query {
    info: String!

    wozobject(objectnr: ID, allecycli: Boolean): Wozobject

    wozobjects(filter: String, skip: Int, take: Int): [Wozobject!]!

  }

`

var alleCycli:boolean = false

const applyTakeConstraints = (params: { min: number; max: number; value: number }) => {
  if (params.value < params.min || params.value > params.max) {
    throw new GraphQLError(
      `'take' argument value '${params.value}' is outside the valid range of '${params.min}' to '${params.max}'.`
    )
  }
  return params.value
}

const resolvers = {

  Query: {

    info: () => `This is an GraphQL API on custom WOZ instance`,

    wozobject: async (parent: unknown, args: { objectnr: string, allecycli: boolean }, context: GraphQLContext) => {
      alleCycli = args.allecycli
      return context.prisma.wozobject.findUnique({
        where: { objectnr: parseInt(args.objectnr) }
      })
    },


    wozobjects: async (parent: unknown, args: { filter?: string; skip?: number; take?: number }, context: GraphQLContext) => {
      const where = args.filter
        ? {
            OR: [
              { ingangstatusdom: { contains: args.filter } },
              { eindestatusdom: { contains: args.filter } },
              { wozobjectsrtdom: { contains: args.filter } },
              { wozobjectnr: { contains: args.filter } },
              { stopcode: { contains: args.filter } },
              { usermutatie: { contains: args.filter } },
              { indcluster: { contains: args.filter } },
              { procesmutatie: { contains: args.filter } },
              { indberichtenverkeer: { contains: args.filter } },
            ]
          }
        : {}
      const take = applyTakeConstraints({
        min: 1,
        max: 50,
        value: args.take ?? 30
      })
      return context.prisma.wozobject.findMany({
        where,
      	skip: args.skip,
      	take: take
      })
    },

  },


  Taxtaxatie: {
    taxatienr: (parent: Taxtaxatie) => parent.taxatienr,
    tijdvaknr: (parent: Taxtaxatie) => parent.tijdvaknr,
    ddsituatie: (parent: Taxtaxatie) => ( parent.ddsituatie ? parent.ddsituatie.toISOString() : null ),
    taxredencode: (parent: Taxtaxatie) => parent.taxredencode,
    cbsvrijsteldom: (parent: Taxtaxatie) => parent.cbsvrijsteldom,
    indwoning: (parent: Taxtaxatie) => parent.indwoning,
    resultaatdom: (parent: Taxtaxatie) => parent.resultaatdom,
    srtobjectcode: (parent: Taxtaxatie) => parent.srtobjectcode,
    indreferentie: (parent: Taxtaxatie) => parent.indreferentie,
    gebouwddom: (parent: Taxtaxatie) => parent.gebouwddom,
    ddvastgesteld: (parent: Taxtaxatie) => ( parent.ddvastgesteld ? parent.ddvastgesteld.toISOString() : null ),
    ddtaxatie: (parent: Taxtaxatie) => ( parent.ddtaxatie ? parent.ddtaxatie.toISOString() : null ),
    indcourant: (parent: Taxtaxatie) => parent.indcourant,
    monumentcode: (parent: Taxtaxatie) => parent.monumentcode,
    stopcode: (parent: Taxtaxatie) => parent.stopcode,
    adresbenamingnr: (parent: Taxtaxatie) => parent.adresbenamingnr,
    omschrijving: (parent: Taxtaxatie) => parent.omschrijving,
    broncode: (parent: Taxtaxatie) => parent.broncode,
    transactienr: (parent: Taxtaxatie) => parent.transactienr,
    euwoz: (parent: Taxtaxatie) => parent.euwoz,
    eutaxatie: (parent: Taxtaxatie) => parent.eutaxatie,
    euozb: (parent: Taxtaxatie) => parent.euozb,
    eugebouwd: (parent: Taxtaxatie) => parent.eugebouwd,
    jjbouw: (parent: Taxtaxatie) => parent.jjbouw,
    jjbouwrange: (parent: Taxtaxatie) => parent.jjbouwrange,
    jjrenovatie: (parent: Taxtaxatie) => parent.jjrenovatie,
    pprenovatie: (parent: Taxtaxatie) => parent.pprenovatie,
    ppgereed: (parent: Taxtaxatie) => parent.ppgereed,
    subjectnreig: (parent: Taxtaxatie) => parent.subjectnreig,
    subjectnrgeb: (parent: Taxtaxatie) => parent.subjectnrgeb,
    bouwlaagtoegang: (parent: Taxtaxatie) => parent.bouwlaagtoegang,
    groepaanduiding: (parent: Taxtaxatie) => parent.groepaanduiding,
    groepnr: (parent: Taxtaxatie) => parent.groepnr,
    bijzwaarderingsdom: (parent: Taxtaxatie) => parent.bijzwaarderingsdom,
    waardvoorschriftdom: (parent: Taxtaxatie) => parent.waardvoorschriftdom,
    omzetbelastingdom: (parent: Taxtaxatie) => parent.omzetbelastingdom,
    indvervallen: (parent: Taxtaxatie) => parent.indvervallen,
    ttopvoer: (parent: Taxtaxatie) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Taxtaxatie) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    resultaatcontroledom: (parent: Taxtaxatie) => parent.resultaatcontroledom,
    ppstijging: (parent: Taxtaxatie) => parent.ppstijging,
    taxcompromiscode: (parent: Taxtaxatie) => parent.taxcompromiscode,
    eucompromiswoz: (parent: Taxtaxatie) => parent.eucompromiswoz,
    eucompromisozb: (parent: Taxtaxatie) => parent.eucompromisozb,
    ddtoestand: (parent: Taxtaxatie) => ( parent.ddtoestand ? parent.ddtoestand.toISOString() : null ),
    euozbgn: (parent: Taxtaxatie) => parent.euozbgn,
    bouwtypecode: (parent: Taxtaxatie) => parent.bouwtypecode,
    euprognose: (parent: Taxtaxatie) => parent.euprognose,
    indgebouwd: (parent: Taxtaxatie) => parent.indgebouwd,
    inpandigdom: (parent: Taxtaxatie) => parent.inpandigdom,
    taxverslagdom: (parent: Taxtaxatie) => parent.taxverslagdom,
    eucompromisozbgn: (parent: Taxtaxatie) => parent.eucompromisozbgn,
    doelmatigheiddom: (parent: Taxtaxatie) => parent.doelmatigheiddom,
    functionaliteitdom: (parent: Taxtaxatie) => parent.functionaliteitdom,
    kwaliteitdom: (parent: Taxtaxatie) => parent.kwaliteitdom,
    leegstandsrisicodom: (parent: Taxtaxatie) => parent.leegstandsrisicodom,
    liggingdom: (parent: Taxtaxatie) => parent.liggingdom,
    locatiedom: (parent: Taxtaxatie) => parent.locatiedom,
    onderhouddom: (parent: Taxtaxatie) => parent.onderhouddom,
    uitstralingdom: (parent: Taxtaxatie) => parent.uitstralingdom,
    voorzieningdom: (parent: Taxtaxatie) => parent.voorzieningdom,
    euprognosegebr: (parent: Taxtaxatie) => parent.euprognosegebr,
    waardegebiedcode: (parent: Taxtaxatie) => parent.waardegebiedcode,
    ttwozwijziging: (parent: Taxtaxatie) => ( parent.ttwozwijziging ? parent.ttwozwijziging.toISOString() : null ),
    gebruiktemethodiekdom: (parent: Taxtaxatie) => parent.gebruiktemethodiekdom,
    identificatietvs: (parent: Taxtaxatie) => parent.identificatietvs,
    taxatiebrondom: (parent: Taxtaxatie) => parent.taxatiebrondom,
    procesmutatie: (parent: Taxtaxatie) => parent.procesmutatie,
  },

  Wozbelang: {
    belangnr: (parent: Wozbelang) => parent.belangnr,
    ttingangreg: (parent: Wozbelang) => ( parent.ttingangreg ? parent.ttingangreg.toISOString() : null ),
    ingangregnr: (parent: Wozbelang) => parent.ingangregnr,
    ingangstatusdom: (parent: Wozbelang) => parent.ingangstatusdom,
    tteindereg: (parent: Wozbelang) => ( parent.tteindereg ? parent.tteindereg.toISOString() : null ),
    einderegnr: (parent: Wozbelang) => parent.einderegnr,
    eindestatusdom: (parent: Wozbelang) => parent.eindestatusdom,
    aandeigenaargebrdom: (parent: Wozbelang) => parent.aandeigenaargebrdom,
    stopcode: (parent: Wozbelang) => parent.stopcode,
    ttopvoer: (parent: Wozbelang) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Wozbelang) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    procesmutatie: (parent: Wozbelang) => parent.procesmutatie,
    wozbelangcyclus (parent: Wozbelang, args: {}, context: GraphQLContext) {
      var curDate = new Date()
      var curDate1 = new Date()
      curDate1.setDate(curDate1.getDate() + 1)
      if ( alleCycli ) {
        return context.prisma.wozbelangcyclus.findMany({
          where: {
            belangnr: parent.belangnr
          }
        })
      } else {
        return context.prisma.wozbelangcyclus.findMany({
          where: {
            //belangnr: parent.belangnr
            AND: [
              { belangnr: parent.belangnr },
              { tteindereg: null },
              { ttingang: { lt: curDate } },
              {
                OR: [
                  { tteinde: null },
                  { tteinde: { gt: curDate1 } },
                ]
              }
            ]
          }
        })
      }
    },
  },

  Wozbelangcyclus: {
    belangcyclusnr: (parent: Wozbelangcyclus) => parent.belangcyclusnr,
    ttingangreg: (parent: Wozbelangcyclus) => ( parent.ttingangreg ? parent.ttingangreg.toISOString() : null ),
    ingangregnr: (parent: Wozbelangcyclus) => parent.ingangregnr,
    ingangstatusdom: (parent: Wozbelangcyclus) => parent.ingangstatusdom,
    tteindereg: (parent: Wozbelangcyclus) => ( parent.tteindereg ? parent.tteindereg.toISOString() : null ),
    einderegnr: (parent: Wozbelangcyclus) => parent.einderegnr,
    eindestatusdom: (parent: Wozbelangcyclus) => parent.eindestatusdom,
    ttingang: (parent: Wozbelangcyclus) => ( parent.ttingang ? parent.ttingang.toISOString() : null ),
    tteinde: (parent: Wozbelangcyclus) => ( parent.tteinde ? parent.tteinde.toISOString() : null ),
    subjectnr: (parent: Wozbelangcyclus) => parent.subjectnr,
    indinonderzoek: (parent: Wozbelangcyclus) => parent.indinonderzoek,
    belangstatusdom: (parent: Wozbelangcyclus) => parent.belangstatusdom,
    indcumsuis: (parent: Wozbelangcyclus) => parent.indcumsuis,
    zakelijkrechtcode: (parent: Wozbelangcyclus) => parent.zakelijkrechtcode,
    broncode: (parent: Wozbelangcyclus) => parent.broncode,
    groeprelcode: (parent: Wozbelangcyclus) => parent.groeprelcode,
    ttopvoer: (parent: Wozbelangcyclus) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Wozbelangcyclus) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    ddconstatering: (parent: Wozbelangcyclus) => ( parent.ddconstatering ? parent.ddconstatering.toISOString() : null ),
    redenconstateringcode: (parent: Wozbelangcyclus) => parent.redenconstateringcode,
    procesmutatie: (parent: Wozbelangcyclus) => parent.procesmutatie,
  },

  Wozdeelobject: {
    deelobjectnr: (parent: Wozdeelobject) => parent.deelobjectnr,
    ttingangreg: (parent: Wozdeelobject) => ( parent.ttingangreg ? parent.ttingangreg.toISOString() : null ),
    ingangregnr: (parent: Wozdeelobject) => parent.ingangregnr,
    ingangstatusdom: (parent: Wozdeelobject) => parent.ingangstatusdom,
    tteindereg: (parent: Wozdeelobject) => ( parent.tteindereg ? parent.tteindereg.toISOString() : null ),
    einderegnr: (parent: Wozdeelobject) => parent.einderegnr,
    eindestatusdom: (parent: Wozdeelobject) => parent.eindestatusdom,
    nummer: (parent: Wozdeelobject) => parent.nummer,
    usermutatie: (parent: Wozdeelobject) => parent.usermutatie,
    ttopvoer: (parent: Wozdeelobject) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Wozdeelobject) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    indwoz: (parent: Wozdeelobject) => parent.indwoz,
    indtaxatie: (parent: Wozdeelobject) => parent.indtaxatie,
    ouderdeelobject: (parent: Wozdeelobject) => parent.ouderdeelobject,
    procesmutatie: (parent: Wozdeelobject) => parent.procesmutatie,
    wozdeelobjectcyclus (parent: Wozdeelobject, args: {}, context: GraphQLContext) {
      var curDate = new Date()
      var curDate1 = new Date()
      curDate1.setDate(curDate1.getDate() + 1)
      if ( alleCycli ) {
        return context.prisma.wozdeelobjectcyclus.findMany({
          where: {
            deelobjectnr: parent.deelobjectnr
          }
        })
      } else {
        return context.prisma.wozdeelobjectcyclus.findMany({
          where: {
            AND: [
              { deelobjectnr: parent.deelobjectnr },
              { tteindereg: null },
              { ttingang: { lt: curDate } },
              {
                OR: [
                  { tteinde: null },
                  { tteinde: { gt: curDate1 } },
                ]
              }
            ]
          }
        })
      }
    },
  },

  Wozdeelobjectcode: {
    deelobjectcode: (parent: Wozdeelobjectcode) => parent.deelobjectcode,
    indvervallen: (parent: Wozdeelobjectcode) => parent.indvervallen,
    ttopvoer: (parent: Wozdeelobjectcode) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Wozdeelobjectcode) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    usermutatie: (parent: Wozdeelobjectcode) => parent.usermutatie,
    ddingang: (parent: Wozdeelobjectcode) => ( parent.ddingang ? parent.ddingang.toISOString() : null ),
    ddeinde: (parent: Wozdeelobjectcode) => ( parent.ddeinde ? parent.ddeinde.toISOString() : null ),
    omschrijving: (parent: Wozdeelobjectcode) => parent.omschrijving,
    omschrijvingverkort: (parent: Wozdeelobjectcode) => parent.omschrijvingverkort,
    srtdeeldom: (parent: Wozdeelobjectcode) => parent.srtdeeldom,
    eenheiddom: (parent: Wozdeelobjectcode) => parent.eenheiddom,
    vrijstelcode: (parent: Wozdeelobjectcode) => parent.vrijstelcode,
    itzafactor: (parent: Wozdeelobjectcode) => parent.itzafactor,
    ppfactortondom: (parent: Wozdeelobjectcode) => parent.ppfactortondom,
    eenheidtondom: (parent: Wozdeelobjectcode) => parent.eenheidtondom,
    opptondom: (parent: Wozdeelobjectcode) => parent.opptondom,
    inhoudtondom: (parent: Wozdeelobjectcode) => parent.inhoudtondom,
    aantaltondom: (parent: Wozdeelobjectcode) => parent.aantaltondom,
    waardetondom: (parent: Wozdeelobjectcode) => parent.waardetondom,
    laagtondom: (parent: Wozdeelobjectcode) => parent.laagtondom,
    bouwjaartondom: (parent: Wozdeelobjectcode) => parent.bouwjaartondom,
    aantekeningtondom: (parent: Wozdeelobjectcode) => parent.aantekeningtondom,
    itzafactortondom: (parent: Wozdeelobjectcode) => parent.itzafactortondom,
    maatvoeringtondom: (parent: Wozdeelobjectcode) => parent.maatvoeringtondom,
    huurprijstondom: (parent: Wozdeelobjectcode) => parent.huurprijstondom,
    kapfactortondom: (parent: Wozdeelobjectcode) => parent.kapfactortondom,
    vrijstellingtondom: (parent: Wozdeelobjectcode) => parent.vrijstellingtondom,
    pprenovatietondom: (parent: Wozdeelobjectcode) => parent.pprenovatietondom,
    onderhoudtondom: (parent: Wozdeelobjectcode) => parent.onderhoudtondom,
    kwaliteittondom: (parent: Wozdeelobjectcode) => parent.kwaliteittondom,
    modeltypedom: (parent: Wozdeelobjectcode) => parent.modeltypedom,
    eudefault: (parent: Wozdeelobjectcode) => parent.eudefault,
    stuftaxonderdeelcode: (parent: Wozdeelobjectcode) => parent.stuftaxonderdeelcode,
    breedtetondom: (parent: Wozdeelobjectcode) => parent.breedtetondom,
    hoogtetondom: (parent: Wozdeelobjectcode) => parent.hoogtetondom,
    lengtetondom: (parent: Wozdeelobjectcode) => parent.lengtetondom,
    doelmatigheidtondom: (parent: Wozdeelobjectcode) => parent.doelmatigheidtondom,
    uitstralingtondom: (parent: Wozdeelobjectcode) => parent.uitstralingtondom,
    afrondfactortondom: (parent: Wozdeelobjectcode) => parent.afrondfactortondom,
    afrondfactor: (parent: Wozdeelobjectcode) => parent.afrondfactor,
    indgebouwd: (parent: Wozdeelobjectcode) => parent.indgebouwd,
    indwoning: (parent: Wozdeelobjectcode) => parent.indwoning,
    euminimum: (parent: Wozdeelobjectcode) => parent.euminimum,
    indwoz: (parent: Wozdeelobjectcode) => parent.indwoz,
    indtaxatie: (parent: Wozdeelobjectcode) => parent.indtaxatie,
    indvmlmuteren: (parent: Wozdeelobjectcode) => parent.indvmlmuteren,
    indvmlverwijderen: (parent: Wozdeelobjectcode) => parent.indvmlverwijderen,
    indvmltoelichting: (parent: Wozdeelobjectcode) => parent.indvmltoelichting,
    liggingdom: (parent: Wozdeelobjectcode) => parent.liggingdom,
    kwaliteitdom: (parent: Wozdeelobjectcode) => parent.kwaliteitdom,
    onderhouddom: (parent: Wozdeelobjectcode) => parent.onderhouddom,
    doelmatigheiddom: (parent: Wozdeelobjectcode) => parent.doelmatigheiddom,
    uitstralingdom: (parent: Wozdeelobjectcode) => parent.uitstralingdom,
    voorzieningendom: (parent: Wozdeelobjectcode) => parent.voorzieningendom,
    ppmarktontwikkeling: (parent: Wozdeelobjectcode) => parent.ppmarktontwikkeling,
    formule: (parent: Wozdeelobjectcode) => parent.formule,
    indtonenfront: (parent: Wozdeelobjectcode) => parent.indtonenfront,
    defaulttaxmethodiekdom: (parent: Wozdeelobjectcode) => parent.defaulttaxmethodiekdom,
    indbagoppervlakteovernemen: (parent: Wozdeelobjectcode) => parent.indbagoppervlakteovernemen,
    indbagbouwjaarovernemen: (parent: Wozdeelobjectcode) => parent.indbagbouwjaarovernemen,
    indbagobjectovernemen: (parent: Wozdeelobjectcode) => parent.indbagobjectovernemen,
    defaultfunctionaliteitdom: (parent: Wozdeelobjectcode) => parent.defaultfunctionaliteitdom,
    defaultleegstandsrisicodom: (parent: Wozdeelobjectcode) => parent.defaultleegstandsrisicodom,
    defaultlocatiedom: (parent: Wozdeelobjectcode) => parent.defaultlocatiedom,
    defaultbrutonettoinhdom: (parent: Wozdeelobjectcode) => parent.defaultbrutonettoinhdom,
    defaultbrutonettooppdom: (parent: Wozdeelobjectcode) => parent.defaultbrutonettooppdom,
    defaultdeelobjectstatusdom: (parent: Wozdeelobjectcode) => parent.defaultdeelobjectstatusdom,
    defaultarchetypecode: (parent: Wozdeelobjectcode) => parent.defaultarchetypecode,
    defaultomzetbelastingdom: (parent: Wozdeelobjectcode) => parent.defaultomzetbelastingdom,
    indmeetellenoppervlakte: (parent: Wozdeelobjectcode) => parent.indmeetellenoppervlakte,
    indmeetelleninhoud: (parent: Wozdeelobjectcode) => parent.indmeetelleninhoud,
    indoverschrijvenmodeldeelobj: (parent: Wozdeelobjectcode) => parent.indoverschrijvenmodeldeelobj,
    indbagobjectverplicht: (parent: Wozdeelobjectcode) => parent.indbagobjectverplicht,
    procesmutatie: (parent: Wozdeelobjectcode) => parent.procesmutatie,
    voorzieningentondom: (parent: Wozdeelobjectcode) => parent.voorzieningentondom,
    liggingtondom: (parent: Wozdeelobjectcode) => parent.liggingtondom,
  },

  Wozdeelobjectcyclus: {
    deelobjectcyclusnr: (parent: Wozdeelobjectcyclus) => parent.deelobjectcyclusnr,
    ttingangreg: (parent: Wozdeelobjectcyclus) => ( parent.ttingangreg ? parent.ttingangreg.toISOString() : null ),
    ingangregnr: (parent: Wozdeelobjectcyclus) => parent.ingangregnr,
    ingangstatusdom: (parent: Wozdeelobjectcyclus) => parent.ingangstatusdom,
    tteindereg: (parent: Wozdeelobjectcyclus) => ( parent.tteindereg ? parent.tteindereg.toISOString() : null ),
    einderegnr: (parent: Wozdeelobjectcyclus) => parent.einderegnr,
    eindestatusdom: (parent: Wozdeelobjectcyclus) => parent.eindestatusdom,
    ttingang: (parent: Wozdeelobjectcyclus) => ( parent.ttingang ? parent.ttingang.toISOString() : null ),
    tteinde: (parent: Wozdeelobjectcyclus) => ( parent.tteinde ? parent.tteinde.toISOString() : null ),
    jjbouw: (parent: Wozdeelobjectcyclus) => parent.jjbouw,
    bouwlaag: (parent: Wozdeelobjectcyclus) => parent.bouwlaag,
    ontslverdiepingdom: (parent: Wozdeelobjectcyclus) => parent.ontslverdiepingdom,
    aakamers: (parent: Wozdeelobjectcyclus) => parent.aakamers,
    bouwjaarklasse: (parent: Wozdeelobjectcyclus) => parent.bouwjaarklasse,
    jjrenovatie: (parent: Wozdeelobjectcyclus) => parent.jjrenovatie,
    pprenovatie: (parent: Wozdeelobjectcyclus) => parent.pprenovatie,
    doelmatigheiddom: (parent: Wozdeelobjectcyclus) => parent.doelmatigheiddom,
    uitstralingdom: (parent: Wozdeelobjectcyclus) => parent.uitstralingdom,
    voorzieningdom: (parent: Wozdeelobjectcyclus) => parent.voorzieningdom,
    onderhouddom: (parent: Wozdeelobjectcyclus) => parent.onderhouddom,
    kwaliteitdom: (parent: Wozdeelobjectcyclus) => parent.kwaliteitdom,
    inhoud: (parent: Wozdeelobjectcyclus) => parent.inhoud,
    brutonettoinhdom: (parent: Wozdeelobjectcyclus) => parent.brutonettoinhdom,
    oppervlakte: (parent: Wozdeelobjectcyclus) => parent.oppervlakte,
    brutonettooppdom: (parent: Wozdeelobjectcyclus) => parent.brutonettooppdom,
    lengte: (parent: Wozdeelobjectcyclus) => parent.lengte,
    breedte: (parent: Wozdeelobjectcyclus) => parent.breedte,
    hoogte: (parent: Wozdeelobjectcyclus) => parent.hoogte,
    frontbreedte: (parent: Wozdeelobjectcyclus) => parent.frontbreedte,
    aantal: (parent: Wozdeelobjectcyclus) => parent.aantal,
    aantekening: (parent: Wozdeelobjectcyclus) => parent.aantekening,
    deelobjectstatusdom: (parent: Wozdeelobjectcyclus) => parent.deelobjectstatusdom,
    bagmemo: (parent: Wozdeelobjectcyclus) => parent.bagmemo,
    archetypecode: (parent: Wozdeelobjectcyclus) => parent.archetypecode,
    omzetbelastingdom: (parent: Wozdeelobjectcyclus) => parent.omzetbelastingdom,
    vrijstelcode: (parent: Wozdeelobjectcyclus) => parent.vrijstelcode,
    groepnr: (parent: Wozdeelobjectcyclus) => parent.groepnr,
    omschrijving: (parent: Wozdeelobjectcyclus) => parent.omschrijving,
    taxonderdeelnr: (parent: Wozdeelobjectcyclus) => parent.taxonderdeelnr,
    usermutatie: (parent: Wozdeelobjectcyclus) => parent.usermutatie,
    ttopvoer: (parent: Wozdeelobjectcyclus) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Wozdeelobjectcyclus) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    taxmethodiekdom: (parent: Wozdeelobjectcyclus) => parent.taxmethodiekdom,
    indwoning: (parent: Wozdeelobjectcyclus) => parent.indwoning,
    pandbagid: (parent: Wozdeelobjectcyclus) => parent.pandbagid,
    verblijfsobjectbagid: (parent: Wozdeelobjectcyclus) => parent.verblijfsobjectbagid,
    standplaatsbagid: (parent: Wozdeelobjectcyclus) => parent.standplaatsbagid,
    ligplaatsbagid: (parent: Wozdeelobjectcyclus) => parent.ligplaatsbagid,
    omschrijvingaanvullend: (parent: Wozdeelobjectcyclus) => parent.omschrijvingaanvullend,
    vrijveld1: (parent: Wozdeelobjectcyclus) => parent.vrijveld1,
    vrijveld2: (parent: Wozdeelobjectcyclus) => parent.vrijveld2,
    vrijveld3: (parent: Wozdeelobjectcyclus) => parent.vrijveld3,
    vrijveld4: (parent: Wozdeelobjectcyclus) => parent.vrijveld4,
    vrijveld5: (parent: Wozdeelobjectcyclus) => parent.vrijveld5,
    vrijveld6: (parent: Wozdeelobjectcyclus) => parent.vrijveld6,
    vrijveld7: (parent: Wozdeelobjectcyclus) => parent.vrijveld7,
    vrijveld8: (parent: Wozdeelobjectcyclus) => parent.vrijveld8,
    vrijveld9: (parent: Wozdeelobjectcyclus) => parent.vrijveld9,
    vrijveld10: (parent: Wozdeelobjectcyclus) => parent.vrijveld10,
    vrijveld11: (parent: Wozdeelobjectcyclus) => parent.vrijveld11,
    vrijveld12: (parent: Wozdeelobjectcyclus) => parent.vrijveld12,
    vrijveld13: (parent: Wozdeelobjectcyclus) => parent.vrijveld13,
    vrijveld14: (parent: Wozdeelobjectcyclus) => parent.vrijveld14,
    vrijveld15: (parent: Wozdeelobjectcyclus) => parent.vrijveld15,
    vrijveld16: (parent: Wozdeelobjectcyclus) => parent.vrijveld16,
    vrijveld17: (parent: Wozdeelobjectcyclus) => parent.vrijveld17,
    vrijveld18: (parent: Wozdeelobjectcyclus) => parent.vrijveld18,
    vrijveld19: (parent: Wozdeelobjectcyclus) => parent.vrijveld19,
    vrijveld20: (parent: Wozdeelobjectcyclus) => parent.vrijveld20,
    indprimair: (parent: Wozdeelobjectcyclus) => parent.indprimair,
    liggingdom: (parent: Wozdeelobjectcyclus) => parent.liggingdom,
    functionaliteitdom: (parent: Wozdeelobjectcyclus) => parent.functionaliteitdom,
    leegstandsrisicodom: (parent: Wozdeelobjectcyclus) => parent.leegstandsrisicodom,
    locatiedom: (parent: Wozdeelobjectcyclus) => parent.locatiedom,
    indprimairtaxatie: (parent: Wozdeelobjectcyclus) => parent.indprimairtaxatie,
    ppfactor: (parent: Wozdeelobjectcyclus) => parent.ppfactor,
    clusternr: (parent: Wozdeelobjectcyclus) => parent.clusternr,
    nraanduidingbagid: (parent: Wozdeelobjectcyclus) => parent.nraanduidingbagid,
    zone: (parent: Wozdeelobjectcyclus) => parent.zone,
    gebroppervlakte: (parent: Wozdeelobjectcyclus) => parent.gebroppervlakte,
    meerekenengvwhwkdom: (parent: Wozdeelobjectcyclus) => parent.meerekenengvwhwkdom,
    redennietkoppelenbagobject: (parent: Wozdeelobjectcyclus) => parent.redennietkoppelenbagobject,
    deelobjectgeometrienr: (parent: Wozdeelobjectcyclus) => parent.deelobjectgeometrienr,
    ppgereed: (parent: Wozdeelobjectcyclus) => parent.ppgereed,
    energielabeldom: (parent: Wozdeelobjectcyclus) => parent.energielabeldom,
    procesmutatie: (parent: Wozdeelobjectcyclus) => parent.procesmutatie,
    wozdeelobjectcode (parent: Wozdeelobjectcyclus, args: {}, context: GraphQLContext) {
      return context.prisma.wozdeelobjectcode.findUnique({
        where: {
          deelobjectcode: ( parent.deelobjectcode ? parent.deelobjectcode : undefined )
        }
      })
    },
  },

  Wozobject: {
    objectnr: (parent: Wozobject) => parent.objectnr,
    ttingangreg: (parent: Wozobject) => ( parent.ttingangreg ? parent.ttingangreg.toISOString() : null ),
    ingangregnr: (parent: Wozobject) => parent.ingangregnr,
    ingangstatusdom: (parent: Wozobject) => parent.ingangstatusdom,
    tteindereg: (parent: Wozobject) => ( parent.tteindereg ? parent.tteindereg.toISOString() : null ),
    einderegnr: (parent: Wozobject) => parent.einderegnr,
    eindestatusdom: (parent: Wozobject) => parent.eindestatusdom,
    wozobjectsrtdom: (parent: Wozobject) => parent.wozobjectsrtdom,
    wozobjectnr: (parent: Wozobject) => parent.wozobjectnr,
    stopcode: (parent: Wozobject) => parent.stopcode,
    usermutatie: (parent: Wozobject) => parent.usermutatie,
    ttopvoer: (parent: Wozobject) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Wozobject) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    indcluster: (parent: Wozobject) => parent.indcluster,
    procesmutatie: (parent: Wozobject) => parent.procesmutatie,
    indberichtenverkeer: (parent: Wozobject) => parent.indberichtenverkeer,
    wozobjectcyclus (parent: Wozobject, args: {}, context: GraphQLContext) {
      var curDate = new Date()
      var curDate1 = new Date()
      curDate1.setDate(curDate1.getDate() + 1)
      if ( alleCycli ) {
        return context.prisma.wozobjectcyclus.findMany({
          where: {
            objectnr: parent.objectnr
          }
        })
      } else {
        return context.prisma.wozobjectcyclus.findMany({
          where: {
            AND: [
              { objectnr: parent.objectnr },
              { tteindereg: null },
              { ttingang: { lt: curDate } },
              {
                OR: [
                  { tteinde: null },
                  { tteinde: { gt: curDate1 } },
                ]
              }
            ]
          }
        })
      }
    },
    taxtaxatie (parent: Wozobject, args: {}, context: GraphQLContext) {
      return context.prisma.taxtaxatie.findMany({
        where: {
          objectnr: parent.objectnr
        }
      })
    },
    wozdeelobject (parent: Wozobject, args: {}, context: GraphQLContext) {
      return context.prisma.wozdeelobject.findMany({
        where: {
          objectnr: parent.objectnr
        }
      })
    },
    wozbelang (parent: Wozobject, args: {}, context: GraphQLContext) {
      return context.prisma.wozbelang.findMany({
        where: {
          objectnr: parent.objectnr
        }
      })
    },
  },

  Wozobjectcyclus: {
    objectcyclusnr: (parent: Wozobjectcyclus) => parent.objectcyclusnr,
    ttingangreg: (parent: Wozobjectcyclus) => ( parent.ttingangreg ? parent.ttingangreg.toISOString() : null ),
    ingangregnr: (parent: Wozobjectcyclus) => parent.ingangregnr,
    ingangstatusdom: (parent: Wozobjectcyclus) => parent.ingangstatusdom,
    tteindereg: (parent: Wozobjectcyclus) => ( parent.tteindereg ? parent.tteindereg.toISOString() : null ),
    einderegnr: (parent: Wozobjectcyclus) => parent.einderegnr,
    eindestatusdom: (parent: Wozobjectcyclus) => parent.eindestatusdom,
    ttingang: (parent: Wozobjectcyclus) => ( parent.ttingang ? parent.ttingang.toISOString() : null ),
    tteinde: (parent: Wozobjectcyclus) => ( parent.tteinde ? parent.tteinde.toISOString() : null ),
    omschrijving: (parent: Wozobjectcyclus) => parent.omschrijving,
    gemeentecode: (parent: Wozobjectcyclus) => parent.gemeentecode,
    oppgrond: (parent: Wozobjectcyclus) => parent.oppgrond,
    gebruiksdom: (parent: Wozobjectcyclus) => parent.gebruiksdom,
    gebouwddom: (parent: Wozobjectcyclus) => parent.gebouwddom,
    omzetbelastingdom: (parent: Wozobjectcyclus) => parent.omzetbelastingdom,
    bouwstroomcode: (parent: Wozobjectcyclus) => parent.bouwstroomcode,
    indinonderzoek: (parent: Wozobjectcyclus) => parent.indinonderzoek,
    waardegebiedcode: (parent: Wozobjectcyclus) => parent.waardegebiedcode,
    wozobjectstatusdom: (parent: Wozobjectcyclus) => parent.wozobjectstatusdom,
    monumentdom: (parent: Wozobjectcyclus) => parent.monumentdom,
    vrijstelcode: (parent: Wozobjectcyclus) => parent.vrijstelcode,
    bijzwaarderingsdom: (parent: Wozobjectcyclus) => parent.bijzwaarderingsdom,
    groepnr: (parent: Wozobjectcyclus) => parent.groepnr,
    indlift: (parent: Wozobjectcyclus) => parent.indlift,
    liggingdom: (parent: Wozobjectcyclus) => parent.liggingdom,
    ontbrekennutsdom: (parent: Wozobjectcyclus) => parent.ontbrekennutsdom,
    stijlletter: (parent: Wozobjectcyclus) => parent.stijlletter,
    bouwtypecode: (parent: Wozobjectcyclus) => parent.bouwtypecode,
    runselectienr: (parent: Wozobjectcyclus) => parent.runselectienr,
    indgbamuteer: (parent: Wozobjectcyclus) => parent.indgbamuteer,
    broncode: (parent: Wozobjectcyclus) => parent.broncode,
    ppgereed: (parent: Wozobjectcyclus) => parent.ppgereed,
    primairdeelobjectnr: (parent: Wozobjectcyclus) => parent.primairdeelobjectnr,
    indcourant: (parent: Wozobjectcyclus) => parent.indcourant,
    indbemalen: (parent: Wozobjectcyclus) => parent.indbemalen,
    nraanduidingnr: (parent: Wozobjectcyclus) => parent.nraanduidingnr,
    identaanvullend: (parent: Wozobjectcyclus) => parent.identaanvullend,
    openbareruimtebagid: (parent: Wozobjectcyclus) => parent.openbareruimtebagid,
    nraanduidingbagid: (parent: Wozobjectcyclus) => parent.nraanduidingbagid,
    omschrijvingaanvullend: (parent: Wozobjectcyclus) => parent.omschrijvingaanvullend,
    usermutatie: (parent: Wozobjectcyclus) => parent.usermutatie,
    ttopvoer: (parent: Wozobjectcyclus) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Wozobjectcyclus) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    doelmatigheiddom: (parent: Wozobjectcyclus) => parent.doelmatigheiddom,
    kwaliteitdom: (parent: Wozobjectcyclus) => parent.kwaliteitdom,
    onderhouddom: (parent: Wozobjectcyclus) => parent.onderhouddom,
    uitstralingdom: (parent: Wozobjectcyclus) => parent.uitstralingdom,
    voorzieningdom: (parent: Wozobjectcyclus) => parent.voorzieningdom,
    functionaliteitdom: (parent: Wozobjectcyclus) => parent.functionaliteitdom,
    leegstandsrisicodom: (parent: Wozobjectcyclus) => parent.leegstandsrisicodom,
    locatiedom: (parent: Wozobjectcyclus) => parent.locatiedom,
    waterschapcode: (parent: Wozobjectcyclus) => parent.waterschapcode,
    inonderzoeknr: (parent: Wozobjectcyclus) => parent.inonderzoeknr,
    oppmeegetaxeerd: (parent: Wozobjectcyclus) => parent.oppmeegetaxeerd,
    verblijfsobjectbagid: (parent: Wozobjectcyclus) => parent.verblijfsobjectbagid,
    standplaatsbagid: (parent: Wozobjectcyclus) => parent.standplaatsbagid,
    ligplaatsbagid: (parent: Wozobjectcyclus) => parent.ligplaatsbagid,
    werkgebiedtaxateurcode: (parent: Wozobjectcyclus) => parent.werkgebiedtaxateurcode,
    werkgebiedcontrollercode: (parent: Wozobjectcyclus) => parent.werkgebiedcontrollercode,
    taxateur: (parent: Wozobjectcyclus) => parent.taxateur,
    werkvoorbereider: (parent: Wozobjectcyclus) => parent.werkvoorbereider,
    lozingtypedom: (parent: Wozobjectcyclus) => parent.lozingtypedom,
    lozingcode: (parent: Wozobjectcyclus) => parent.lozingcode,
    objectgeometrienr: (parent: Wozobjectcyclus) => parent.objectgeometrienr,
    vrijkenmerkcode: (parent: Wozobjectcyclus) => parent.vrijkenmerkcode,
    procesmutatie: (parent: Wozobjectcyclus) => parent.procesmutatie,
    wozsrtobjectcode (parent: Wozobjectcyclus, args: {}, context: GraphQLContext) {
      return context.prisma.wozsrtobjectcode.findUnique({
        where: {
          srtobjectcode: ( parent.srtobjectcode ? parent.srtobjectcode : undefined )
        }
      })
    },
  },

  Wozsrtobjectcode: {
    srtobjectcode: (parent: Wozsrtobjectcode) => parent.srtobjectcode,
    indvervallen: (parent: Wozsrtobjectcode) => parent.indvervallen,
    ttopvoer: (parent: Wozsrtobjectcode) => ( parent.ttopvoer ? parent.ttopvoer.toISOString() : null ),
    ttmutatie: (parent: Wozsrtobjectcode) => ( parent.ttmutatie ? parent.ttmutatie.toISOString() : null ),
    usermutatie: (parent: Wozsrtobjectcode) => parent.usermutatie,
    ddingang: (parent: Wozsrtobjectcode) => ( parent.ddingang ? parent.ddingang.toISOString() : null ),
    ddeinde: (parent: Wozsrtobjectcode) => ( parent.ddeinde ? parent.ddeinde.toISOString() : null ),
    omschrijving: (parent: Wozsrtobjectcode) => parent.omschrijving,
    gebruiksdom: (parent: Wozsrtobjectcode) => parent.gebruiksdom,
    indwoning: (parent: Wozsrtobjectcode) => parent.indwoning,
    indgbawoning: (parent: Wozsrtobjectcode) => parent.indgbawoning,
    indgba: (parent: Wozsrtobjectcode) => parent.indgba,
    indcontrvreovl: (parent: Wozsrtobjectcode) => parent.indcontrvreovl,
    gebouwddom: (parent: Wozsrtobjectcode) => parent.gebouwddom,
    omschrijvingverkort: (parent: Wozsrtobjectcode) => parent.omschrijvingverkort,
    categoriecode: (parent: Wozsrtobjectcode) => parent.categoriecode,
    subcategoriecode: (parent: Wozsrtobjectcode) => parent.subcategoriecode,
    indwonwozgebruik: (parent: Wozsrtobjectcode) => parent.indwonwozgebruik,
    indstufafval: (parent: Wozsrtobjectcode) => parent.indstufafval,
    indkvk: (parent: Wozsrtobjectcode) => parent.indkvk,
    stfgebruiksdom: (parent: Wozsrtobjectcode) => parent.stfgebruiksdom,
    stfgebouwddom: (parent: Wozsrtobjectcode) => parent.stfgebouwddom,
    indexporteerortax: (parent: Wozsrtobjectcode) => parent.indexporteerortax,
    procesmutatie: (parent: Wozsrtobjectcode) => parent.procesmutatie,
  },


}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})
