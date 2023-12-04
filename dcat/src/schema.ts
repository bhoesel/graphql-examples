

// Generated at 2023-11-14 15:53:14 --

import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLError } from 'graphql'
import { Prisma } from '@prisma/client'
import type {
  Catalog
, Catalogrecord
, Conformsto
, Dataservice
, Dataset
, Description
, Distribution
, Keyword
, Legalfoundation
, Otheridentifier
, Qualifiedattribution
, Resourcelanguage
, Rights
, Spatial
, Theme
, Title
} from '@prisma/client'
import type { GraphQLContext } from './context'

const typeDefinitions = /* GraphQL */ `
  type Catalog {
    id: ID!
    identifier: String
    license: String
    creator: String
    publisher: String
    contactPoint: String
    accessRights: String
    releaseDate: String
    update: String
    landingPage: String
    frequency: String
    temporalCoverage: String
    homepage: String
    themes: String
    catalogId: Int
    catalogRecordId: Int
    legalfoundation: [Legalfoundation]
    otheridentifier: [Otheridentifier]
    qualifiedattribution: [Qualifiedattribution]
    rights: [Rights]
    description: [Description]
    keyword: [Keyword]
    resourcelanguage: [Resourcelanguage]
    spatial: [Spatial]
    title: [Title]
    theme: [Theme]
    dataset: [Dataset]
    catalogrecord: [Catalogrecord]
    conformsto: [Conformsto]
    dataservice: [Dataservice]
  }

  type Catalogrecord {
    id: ID!
    primaryTopic: String
    modified: String
    listingDate: String
    conformsTo: String
    sourceMetadata: String
  }

  type Conformsto {
    id: ID!
    conformTo: String!
  }

""" dcat:DataService """
  type Dataservice {
    id: ID!
""" dct:identifier """
    identifier: String
""" dct:license """
    license: String
""" dct:creator """
    creator: String
""" dct:publisher """
    publisher: String
""" dcat:contactPoint """
    contactPoint: String
""" dct:accessRights """
    accessRights: String
""" dct:issued """
    releaseDate: String
""" dct:issued """
    update: String
""" dcat:landingPage """
    landingPage: String
""" dcat:endpointURL """
    endpointURL: String
""" dcat:endpointDescription """
    endpointDescription: String
""" dcat:Distribution """
    distributionId: Int
""" dcat:CatalogRecord """
    catalogRecordId: Int
""" dct:language """
    resourcelanguage: [Resourcelanguage]
""" dcat:servesDataset """
    dataset: [Dataset]
""" dct:description """
    description: [Description]
""" dcat:theme """
    theme: [Theme]
""" dct:conformsTo """
    conformsto: [Conformsto]
""" prov:qualifiedAttribution """
    qualifiedattribution: [Qualifiedattribution]
""" dcat:keyword """
    keyword: [Keyword]
""" adms:identifier """
    otheridentifier: [Otheridentifier]
""" donl:grondslag """
    legalfoundation: [Legalfoundation]
    rights: [Rights]
    spatial: [Spatial]
""" dct:title """
    title: [Title]
  }

  type Dataset {
    id: ID!
    identifier: String
    license: String
    creator: String
    publisher: String
    contactPoint: String
    accessRights: String
    releaseDate: String
    update: String
    landingPage: String
    frequency: String
    temporalCoverage: String
    catalogrecordId: Int
    legalfoundation: [Legalfoundation]
    otheridentifier: [Otheridentifier]
    distribution: [Distribution]
    title: [Title]
    theme: [Theme]
    keyword: [Keyword]
    description: [Description]
    conformsto: [Conformsto]
    resourcelanguage: [Resourcelanguage]
    rights: [Rights]
    spatial: [Spatial]
    qualifiedattribution: [Qualifiedattribution]
  }

  type Description {
    id: ID!
    description: String!
    resourcelanguage: [Resourcelanguage]
  }

  type Distribution {
    id: ID!
    accessURL: String
    format: String
    license: String
    accesService: String
    downloadURL: String
    modified: String
    issued: String
    byteSize: Int
    mediaType: String
    checksum: Int
    supportingRole: String
    theme: [Theme]
    keyword: [Keyword]
    rights: [Rights]
    spatial: [Spatial]
    description: [Description]
    legalfoundation: [Legalfoundation]
    otheridentifier: [Otheridentifier]
    qualifiedattribution: [Qualifiedattribution]
    title: [Title]
  }

  type Keyword {
    id: ID!
    keyword: String!
  }

  type Legalfoundation {
    id: ID!
    legalFoundation: String!
  }

  type Otheridentifier {
    id: ID!
    otherIdentifier: String!
  }

  type Qualifiedattribution {
    id: ID!
    qualifiedAttribution: String!
  }

  type Resourcelanguage {
    id: ID!
    ResourceLanguage: String!
  }

  type Rights {
    id: ID!
    rights: String!
  }

  type Spatial {
    id: ID!
    spatial: String!
  }

  type Theme {
    id: ID!
    theme: String!
  }

  type Title {
    id: ID!
    title: String!
  }

  type Query {
    info: String!

    catalog(id: ID): Catalog

    catalogrecord(id: ID): Catalogrecord

""" dcat:DataService """
    dataservice(id: ID): Dataservice

    dataset(id: ID): Dataset

    distribution(id: ID): Distribution

    catalogs(filter: String, skip: Int, take: Int): [Catalog!]!

    catalogrecords(filter: String, skip: Int, take: Int): [Catalogrecord!]!

""" dcat:DataService """
    dataservices(filter: String, skip: Int, take: Int): [Dataservice!]!

    datasets(filter: String, skip: Int, take: Int): [Dataset!]!

    distributions(filter: String, skip: Int, take: Int): [Distribution!]!

  }

  type Mutation {

    postCatalog(
      identifier: String
    , license: String
    , creator: String
    , publisher: String
    , contactPoint: String
    , accessRights: String
    , releaseDate: String
    , update: String
    , landingPage: String
    , frequency: String
    , temporalCoverage: String
    , homepage: String
    , themes: String
    , catalogId: String
    , catalogRecordId: String
    ): Catalog!

    postCatalogrecord(
      primaryTopic: String
    , modified: String
    , listingDate: String
    , conformsTo: String
    , sourceMetadata: String
    ): Catalogrecord!

    postConformsto(
      conformTo: String!
    ): Conformsto!

    postDataservice(
      identifier: String
    , license: String
    , creator: String
    , publisher: String
    , contactPoint: String
    , accessRights: String
    , releaseDate: String
    , update: String
    , landingPage: String
    , endpointURL: String
    , endpointDescription: String
    , distributionId: String
    , catalogRecordId: String
    ): Dataservice!

    postDataset(
      identifier: String
    , license: String
    , creator: String
    , publisher: String
    , contactPoint: String
    , accessRights: String
    , releaseDate: String
    , update: String
    , landingPage: String
    , frequency: String
    , temporalCoverage: String
    , catalogrecordId: String
    ): Dataset!

    postDescription(
      description: String!
    ): Description!

    postDistribution(
      accessURL: String
    , format: String
    , license: String
    , accesService: String
    , downloadURL: String
    , modified: String
    , issued: String
    , byteSize: String
    , mediaType: String
    , checksum: String
    , supportingRole: String
    ): Distribution!

    postKeyword(
      keyword: String!
    ): Keyword!

    postLegalfoundation(
      legalFoundation: String!
    ): Legalfoundation!

    postOtheridentifier(
      otherIdentifier: String!
    ): Otheridentifier!

    postQualifiedattribution(
      qualifiedAttribution: String!
    ): Qualifiedattribution!

    postResourcelanguage(
      ResourceLanguage: String!
    ): Resourcelanguage!

    postRights(
      rights: String!
    ): Rights!

    postSpatial(
      spatial: String!
    ): Spatial!

    postTheme(
      theme: String!
    ): Theme!

    postTitle(
      title: String!
    ): Title!


    postSpatialOnCatalog(
      catalogId: String!
    , spatial: String
    ): Spatial!

    postSpatialOnDataset(
      datasetId: String!
    , spatial: String
    ): Spatial!

    postSpatialOnDistribution(
      distributionId: String!
    , spatial: String
    ): Spatial!

    postSpatialOnDataservice(
      dataserviceId: String!
    , spatial: String
    ): Spatial!

    postThemeOnCatalog(
      catalogId: String!
    , theme: String
    ): Theme!

    postThemeOnDataset(
      datasetId: String!
    , theme: String
    ): Theme!

    postThemeOnDistribution(
      distributionId: String!
    , theme: String
    ): Theme!

    postThemeOnDataservice(
      dataserviceId: String!
    , theme: String
    ): Theme!

    postDescriptionOnCatalog(
      catalogId: String!
    , description: String
    ): Description!

    postDescriptionOnDataset(
      datasetId: String!
    , description: String
    ): Description!

    postDescriptionOnDataservice(
      dataserviceId: String!
    , description: String
    ): Description!

    postDescriptionOnDistribution(
      distributionId: String!
    , description: String
    ): Description!

    postLegalfoundationOnCatalog(
      catalogId: String!
    , legalFoundation: String
    ): Legalfoundation!

    postLegalfoundationOnDataset(
      datasetId: String!
    , legalFoundation: String
    ): Legalfoundation!

    postLegalfoundationOnDataservice(
      dataserviceId: String!
    , legalFoundation: String
    ): Legalfoundation!

    postLegalfoundationOnDistribution(
      distributionId: String!
    , legalFoundation: String
    ): Legalfoundation!

    postDatasetOnDataservice(
      dataserviceId: String!
    , identifier: String
    , license: String
    , creator: String
    , publisher: String
    , contactPoint: String
    , accessRights: String
    , releaseDate: String
    , update: String
    , landingPage: String
    , frequency: String
    , temporalCoverage: String
    , catalogrecordId: String
    ): Dataset!

    postDatasetOnCatalog(
      catalogId: String!
    , identifier: String
    , license: String
    , creator: String
    , publisher: String
    , contactPoint: String
    , accessRights: String
    , releaseDate: String
    , update: String
    , landingPage: String
    , frequency: String
    , temporalCoverage: String
    , catalogrecordId: String
    ): Dataset!

    postDataserviceOnCatalog(
      catalogId: String!
    , identifier: String
    , license: String
    , creator: String
    , publisher: String
    , contactPoint: String
    , accessRights: String
    , releaseDate: String
    , update: String
    , landingPage: String
    , endpointURL: String
    , endpointDescription: String
    , distributionId: String
    , catalogRecordId: String
    ): Dataservice!

    postCatalogrecordOnCatalog(
      catalogId: String!
    , primaryTopic: String
    , modified: String
    , listingDate: String
    , conformsTo: String
    , sourceMetadata: String
    ): Catalogrecord!

    postDistributionOnDataset(
      datasetId: String!
    , accessURL: String
    , format: String
    , license: String
    , accesService: String
    , downloadURL: String
    , modified: String
    , issued: String
    , byteSize: String
    , mediaType: String
    , checksum: String
    , supportingRole: String
    ): Distribution!

    postKeywordOnCatalog(
      catalogId: String!
    , keyword: String
    ): Keyword!

    postKeywordOnDataset(
      datasetId: String!
    , keyword: String
    ): Keyword!

    postKeywordOnDistribution(
      distributionId: String!
    , keyword: String
    ): Keyword!

    postKeywordOnDataservice(
      dataserviceId: String!
    , keyword: String
    ): Keyword!

    postTitleOnCatalog(
      catalogId: String!
    , title: String
    ): Title!

    postTitleOnDataset(
      datasetId: String!
    , title: String
    ): Title!

    postTitleOnDataservice(
      dataserviceId: String!
    , title: String
    ): Title!

    postTitleOnDistribution(
      distributionId: String!
    , title: String
    ): Title!

    postConformstoOnCatalog(
      catalogId: String!
    , conformTo: String
    ): Conformsto!

    postConformstoOnDataset(
      datasetId: String!
    , conformTo: String
    ): Conformsto!

    postConformstoOnDataservice(
      dataserviceId: String!
    , conformTo: String
    ): Conformsto!

    postQualifiedattributionOnCatalog(
      catalogId: String!
    , qualifiedAttribution: String
    ): Qualifiedattribution!

    postQualifiedattributionOnDataset(
      datasetId: String!
    , qualifiedAttribution: String
    ): Qualifiedattribution!

    postQualifiedattributionOnDataservice(
      dataserviceId: String!
    , qualifiedAttribution: String
    ): Qualifiedattribution!

    postQualifiedattributionOnDistribution(
      distributionId: String!
    , qualifiedAttribution: String
    ): Qualifiedattribution!

    postResourcelanguageOnDataservice(
      dataserviceId: String!
    , ResourceLanguage: String
    ): Resourcelanguage!

    postResourcelanguageOnCatalog(
      catalogId: String!
    , ResourceLanguage: String
    ): Resourcelanguage!

    postResourcelanguageOnDataset(
      datasetId: String!
    , ResourceLanguage: String
    ): Resourcelanguage!

    postResourcelanguageOnDescription(
      distributionId: String!
    , ResourceLanguage: String
    ): Resourcelanguage!

    postOtheridentifierOnCatalog(
      catalogId: String!
    , otherIdentifier: String
    ): Otheridentifier!

    postOtheridentifierOnDataset(
      datasetId: String!
    , otherIdentifier: String
    ): Otheridentifier!

    postOtheridentifierOnDataservice(
      dataserviceId: String!
    , otherIdentifier: String
    ): Otheridentifier!

    postOtheridentifierOnDistribution(
      distributionId: String!
    , otherIdentifier: String
    ): Otheridentifier!

    postRightsOnCatalog(
      catalogId: String!
    , rights: String
    ): Rights!

    postRightsOnDataset(
      datasetId: String!
    , rights: String
    ): Rights!

    postRightsOnDistribution(
      distributionId: String!
    , rights: String
    ): Rights!

    postRightsOnDataservice(
      dataserviceId: String!
    , rights: String
    ): Rights!
  }
`

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

    info: () => `This is an API on a DCAT2-AP-NL instance`,

    catalog: async (parent: unknown, args: { id: string }, context: GraphQLContext) => {
      return context.prisma.catalog.findUnique({
        where: { id: parseInt(args.id) }
      })
    },

    catalogrecord: async (parent: unknown, args: { id: string }, context: GraphQLContext) => {
      return context.prisma.catalogrecord.findUnique({
        where: { id: parseInt(args.id) }
      })
    },

    dataservice: async (parent: unknown, args: { id: string }, context: GraphQLContext) => {
      return context.prisma.dataservice.findUnique({
        where: { id: parseInt(args.id) }
      })
    },

    dataset: async (parent: unknown, args: { id: string }, context: GraphQLContext) => {
      return context.prisma.dataset.findUnique({
        where: { id: parseInt(args.id) }
      })
    },

    distribution: async (parent: unknown, args: { id: string }, context: GraphQLContext) => {
      return context.prisma.distribution.findUnique({
        where: { id: parseInt(args.id) }
      })
    },


    catalogs: async (parent: unknown, args: { filter?: string; skip?: number; take?: number }, context: GraphQLContext) => {
      const where = args.filter
        ? {
            OR: [
              { identifier: { contains: args.filter } },
              { license: { contains: args.filter } },
              { creator: { contains: args.filter } },
              { publisher: { contains: args.filter } },
              { contactPoint: { contains: args.filter } },
              { accessRights: { contains: args.filter } },
              { landingPage: { contains: args.filter } },
              { frequency: { contains: args.filter } },
              { temporalCoverage: { contains: args.filter } },
              { homepage: { contains: args.filter } },
              { themes: { contains: args.filter } },
            ]
          }
        : {}
      const take = applyTakeConstraints({
        min: 1,
        max: 50,
        value: args.take ?? 30
      })
      return context.prisma.catalog.findMany({
        where,
      	skip: args.skip,
      	take: take
      })
    },

    catalogrecords: async (parent: unknown, args: { filter?: string; skip?: number; take?: number }, context: GraphQLContext) => {
      const where = args.filter
        ? {
            OR: [
              { primaryTopic: { contains: args.filter } },
              { conformsTo: { contains: args.filter } },
              { sourceMetadata: { contains: args.filter } },
            ]
          }
        : {}
      const take = applyTakeConstraints({
        min: 1,
        max: 50,
        value: args.take ?? 30
      })
      return context.prisma.catalogrecord.findMany({
        where,
      	skip: args.skip,
      	take: take
      })
    },

    dataservices: async (parent: unknown, args: { filter?: string; skip?: number; take?: number }, context: GraphQLContext) => {
      const where = args.filter
        ? {
            OR: [
              { identifier: { contains: args.filter } },
              { license: { contains: args.filter } },
              { creator: { contains: args.filter } },
              { publisher: { contains: args.filter } },
              { contactPoint: { contains: args.filter } },
              { accessRights: { contains: args.filter } },
              { landingPage: { contains: args.filter } },
              { endpointURL: { contains: args.filter } },
              { endpointDescription: { contains: args.filter } },
            ]
          }
        : {}
      const take = applyTakeConstraints({
        min: 1,
        max: 50,
        value: args.take ?? 30
      })
      return context.prisma.dataservice.findMany({
        where,
      	skip: args.skip,
      	take: take
      })
    },

    datasets: async (parent: unknown, args: { filter?: string; skip?: number; take?: number }, context: GraphQLContext) => {
      const where = args.filter
        ? {
            OR: [
              { identifier: { contains: args.filter } },
              { license: { contains: args.filter } },
              { creator: { contains: args.filter } },
              { publisher: { contains: args.filter } },
              { contactPoint: { contains: args.filter } },
              { accessRights: { contains: args.filter } },
              { landingPage: { contains: args.filter } },
              { frequency: { contains: args.filter } },
              { temporalCoverage: { contains: args.filter } },
            ]
          }
        : {}
      const take = applyTakeConstraints({
        min: 1,
        max: 50,
        value: args.take ?? 30
      })
      return context.prisma.dataset.findMany({
        where,
      	skip: args.skip,
      	take: take
      })
    },

    distributions: async (parent: unknown, args: { filter?: string; skip?: number; take?: number }, context: GraphQLContext) => {
      const where = args.filter
        ? {
            OR: [
              { accessURL: { contains: args.filter } },
              { format: { contains: args.filter } },
              { license: { contains: args.filter } },
              { accesService: { contains: args.filter } },
              { downloadURL: { contains: args.filter } },
              { mediaType: { contains: args.filter } },
              { supportingRole: { contains: args.filter } },
            ]
          }
        : {}
      const take = applyTakeConstraints({
        min: 1,
        max: 50,
        value: args.take ?? 30
      })
      return context.prisma.distribution.findMany({
        where,
      	skip: args.skip,
      	take: take
      })
    },

  },


  Catalog: {
    id: (parent: Catalog) => parent.id,
    identifier: (parent: Catalog) => parent.identifier,
    license: (parent: Catalog) => parent.license,
    creator: (parent: Catalog) => parent.creator,
    publisher: (parent: Catalog) => parent.publisher,
    contactPoint: (parent: Catalog) => parent.contactPoint,
    accessRights: (parent: Catalog) => parent.accessRights,
    releaseDate: (parent: Catalog) => parent.releaseDate,
    update: (parent: Catalog) => parent.update,
    landingPage: (parent: Catalog) => parent.landingPage,
    frequency: (parent: Catalog) => parent.frequency,
    temporalCoverage: (parent: Catalog) => parent.temporalCoverage,
    homepage: (parent: Catalog) => parent.homepage,
    themes: (parent: Catalog) => parent.themes,
    catalogId: (parent: Catalog) => parent.catalogId,
    catalogRecordId: (parent: Catalog) => parent.catalogRecordId,
    legalfoundation (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.legalfoundation.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    otheridentifier (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.otheridentifier.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    qualifiedattribution (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.qualifiedattribution.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    rights (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.rights.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    description (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.description.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    keyword (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.keyword.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    resourcelanguage (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.resourcelanguage.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    spatial (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.spatial.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    title (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.title.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    theme (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.theme.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    dataset (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.dataset.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    catalogrecord (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.catalogrecord.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    conformsto (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.conformsto.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
    dataservice (parent: Catalog, args: {}, context: GraphQLContext) {
      return context.prisma.dataservice.findMany({
        where: {
          catalogId: parent.id
        }
      })
    },
  },

  Catalogrecord: {
    id: (parent: Catalogrecord) => parent.id,
    primaryTopic: (parent: Catalogrecord) => parent.primaryTopic,
    modified: (parent: Catalogrecord) => parent.modified,
    listingDate: (parent: Catalogrecord) => parent.listingDate,
    conformsTo: (parent: Catalogrecord) => parent.conformsTo,
    sourceMetadata: (parent: Catalogrecord) => parent.sourceMetadata,
  },

  Conformsto: {
    id: (parent: Conformsto) => parent.id,
    conformTo: (parent: Conformsto) => parent.conformTo,
  },

  Dataservice: {
    id: (parent: Dataservice) => parent.id,
    identifier: (parent: Dataservice) => parent.identifier,
    license: (parent: Dataservice) => parent.license,
    creator: (parent: Dataservice) => parent.creator,
    publisher: (parent: Dataservice) => parent.publisher,
    contactPoint: (parent: Dataservice) => parent.contactPoint,
    accessRights: (parent: Dataservice) => parent.accessRights,
    releaseDate: (parent: Dataservice) => parent.releaseDate,
    update: (parent: Dataservice) => parent.update,
    landingPage: (parent: Dataservice) => parent.landingPage,
    endpointURL: (parent: Dataservice) => parent.endpointURL,
    endpointDescription: (parent: Dataservice) => parent.endpointDescription,
    distributionId: (parent: Dataservice) => parent.distributionId,
    catalogRecordId: (parent: Dataservice) => parent.catalogRecordId,
    resourcelanguage (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.resourcelanguage.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    dataset (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.dataset.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    description (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.description.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    theme (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.theme.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    conformsto (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.conformsto.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    qualifiedattribution (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.qualifiedattribution.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    keyword (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.keyword.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    otheridentifier (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.otheridentifier.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    legalfoundation (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.legalfoundation.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    rights (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.rights.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    spatial (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.spatial.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
    title (parent: Dataservice, args: {}, context: GraphQLContext) {
      return context.prisma.title.findMany({
        where: {
          dataserviceId: parent.id
        }
      })
    },
  },

  Dataset: {
    id: (parent: Dataset) => parent.id,
    identifier: (parent: Dataset) => parent.identifier,
    license: (parent: Dataset) => parent.license,
    creator: (parent: Dataset) => parent.creator,
    publisher: (parent: Dataset) => parent.publisher,
    contactPoint: (parent: Dataset) => parent.contactPoint,
    accessRights: (parent: Dataset) => parent.accessRights,
    releaseDate: (parent: Dataset) => parent.releaseDate,
    update: (parent: Dataset) => parent.update,
    landingPage: (parent: Dataset) => parent.landingPage,
    frequency: (parent: Dataset) => parent.frequency,
    temporalCoverage: (parent: Dataset) => parent.temporalCoverage,
    catalogrecordId: (parent: Dataset) => parent.catalogrecordId,
    legalfoundation (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.legalfoundation.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    otheridentifier (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.otheridentifier.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    distribution (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.distribution.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    title (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.title.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    theme (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.theme.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    keyword (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.keyword.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    description (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.description.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    conformsto (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.conformsto.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    resourcelanguage (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.resourcelanguage.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    rights (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.rights.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    spatial (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.spatial.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
    qualifiedattribution (parent: Dataset, args: {}, context: GraphQLContext) {
      return context.prisma.qualifiedattribution.findMany({
        where: {
          datasetId: parent.id
        }
      })
    },
  },

  Description: {
    id: (parent: Description) => parent.id,
    description: (parent: Description) => parent.description,
    resourcelanguage (parent: Description, args: {}, context: GraphQLContext) {
      return context.prisma.resourcelanguage.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
  },

  Distribution: {
    id: (parent: Distribution) => parent.id,
    accessURL: (parent: Distribution) => parent.accessURL,
    format: (parent: Distribution) => parent.format,
    license: (parent: Distribution) => parent.license,
    accesService: (parent: Distribution) => parent.accesService,
    downloadURL: (parent: Distribution) => parent.downloadURL,
    modified: (parent: Distribution) => parent.modified,
    issued: (parent: Distribution) => parent.issued,
    byteSize: (parent: Distribution) => parent.byteSize,
    mediaType: (parent: Distribution) => parent.mediaType,
    checksum: (parent: Distribution) => parent.checksum,
    supportingRole: (parent: Distribution) => parent.supportingRole,
    theme (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.theme.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
    keyword (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.keyword.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
    rights (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.rights.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
    spatial (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.spatial.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
    description (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.description.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
    legalfoundation (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.legalfoundation.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
    otheridentifier (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.otheridentifier.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
    qualifiedattribution (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.qualifiedattribution.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
    title (parent: Distribution, args: {}, context: GraphQLContext) {
      return context.prisma.title.findMany({
        where: {
          distributionId: parent.id
        }
      })
    },
  },

  Keyword: {
    id: (parent: Keyword) => parent.id,
    keyword: (parent: Keyword) => parent.keyword,
  },

  Legalfoundation: {
    id: (parent: Legalfoundation) => parent.id,
    legalFoundation: (parent: Legalfoundation) => parent.legalFoundation,
  },

  Otheridentifier: {
    id: (parent: Otheridentifier) => parent.id,
    otherIdentifier: (parent: Otheridentifier) => parent.otherIdentifier,
  },

  Qualifiedattribution: {
    id: (parent: Qualifiedattribution) => parent.id,
    qualifiedAttribution: (parent: Qualifiedattribution) => parent.qualifiedAttribution,
  },

  Resourcelanguage: {
    id: (parent: Resourcelanguage) => parent.id,
    ResourceLanguage: (parent: Resourcelanguage) => parent.ResourceLanguage,
  },

  Rights: {
    id: (parent: Rights) => parent.id,
    rights: (parent: Rights) => parent.rights,
  },

  Spatial: {
    id: (parent: Spatial) => parent.id,
    spatial: (parent: Spatial) => parent.spatial,
  },

  Theme: {
    id: (parent: Theme) => parent.id,
    theme: (parent: Theme) => parent.theme,
  },

  Title: {
    id: (parent: Title) => parent.id,
    title: (parent: Title) => parent.title,
  },

  Mutation: {

    async postCatalog(
      parent: unknown,
      args: {
        identifier: string;
        license: string;
        creator: string;
        publisher: string;
        contactPoint: string;
        accessRights: string;
        releaseDate: string;
        update: string;
        landingPage: string;
        frequency: string;
        temporalCoverage: string;
        homepage: string;
        themes: string;
        catalogId: string;
        catalogRecordId: string;
      },
      context: GraphQLContext
    ) {
      const newCatalog = await context.prisma.catalog.create({
        data: {
            identifier: args.identifier
          , license: args.license
          , creator: args.creator
          , publisher: args.publisher
          , contactPoint: args.contactPoint
          , accessRights: args.accessRights
          , releaseDate: args.releaseDate
          , update: args.update
          , landingPage: args.landingPage
          , frequency: args.frequency
          , temporalCoverage: args.temporalCoverage
          , homepage: args.homepage
          , themes: args.themes
          , catalogId: parseInt(args.catalogId)
          , catalogRecordId: parseInt(args.catalogRecordId)
        }
      })
      return newCatalog
    },

    async postCatalogrecord(
      parent: unknown,
      args: {
        primaryTopic: string;
        modified: string;
        listingDate: string;
        conformsTo: string;
        sourceMetadata: string;
      },
      context: GraphQLContext
    ) {
      const newCatalogrecord = await context.prisma.catalogrecord.create({
        data: {
            primaryTopic: args.primaryTopic
          , modified: args.modified
          , listingDate: args.listingDate
          , conformsTo: args.conformsTo
          , sourceMetadata: args.sourceMetadata
        }
      })
      return newCatalogrecord
    },

    async postConformsto(
      parent: unknown,
      args: {
        conformTo: string;
      },
      context: GraphQLContext
    ) {
      const newConformsto = await context.prisma.conformsto.create({
        data: {
            conformTo: args.conformTo
        }
      })
      return newConformsto
    },

    async postDataservice(
      parent: unknown,
      args: {
        identifier: string;
        license: string;
        creator: string;
        publisher: string;
        contactPoint: string;
        accessRights: string;
        releaseDate: string;
        update: string;
        landingPage: string;
        endpointURL: string;
        endpointDescription: string;
        distributionId: string;
        catalogRecordId: string;
      },
      context: GraphQLContext
    ) {
      const newDataservice = await context.prisma.dataservice.create({
        data: {
            identifier: args.identifier
          , license: args.license
          , creator: args.creator
          , publisher: args.publisher
          , contactPoint: args.contactPoint
          , accessRights: args.accessRights
          , releaseDate: args.releaseDate
          , update: args.update
          , landingPage: args.landingPage
          , endpointURL: args.endpointURL
          , endpointDescription: args.endpointDescription
          , distributionId: parseInt(args.distributionId)
          , catalogRecordId: parseInt(args.catalogRecordId)
        }
      })
      return newDataservice
    },

    async postDataset(
      parent: unknown,
      args: {
        identifier: string;
        license: string;
        creator: string;
        publisher: string;
        contactPoint: string;
        accessRights: string;
        releaseDate: string;
        update: string;
        landingPage: string;
        frequency: string;
        temporalCoverage: string;
        catalogrecordId: string;
      },
      context: GraphQLContext
    ) {
      const newDataset = await context.prisma.dataset.create({
        data: {
            identifier: args.identifier
          , license: args.license
          , creator: args.creator
          , publisher: args.publisher
          , contactPoint: args.contactPoint
          , accessRights: args.accessRights
          , releaseDate: args.releaseDate
          , update: args.update
          , landingPage: args.landingPage
          , frequency: args.frequency
          , temporalCoverage: args.temporalCoverage
          , catalogrecordId: parseInt(args.catalogrecordId)
        }
      })
      return newDataset
    },

    async postDescription(
      parent: unknown,
      args: {
        description: string;
      },
      context: GraphQLContext
    ) {
      const newDescription = await context.prisma.description.create({
        data: {
            description: args.description
        }
      })
      return newDescription
    },

    async postDistribution(
      parent: unknown,
      args: {
        accessURL: string;
        format: string;
        license: string;
        accesService: string;
        downloadURL: string;
        modified: string;
        issued: string;
        byteSize: string;
        mediaType: string;
        checksum: string;
        supportingRole: string;
      },
      context: GraphQLContext
    ) {
      const newDistribution = await context.prisma.distribution.create({
        data: {
            accessURL: args.accessURL
          , format: args.format
          , license: args.license
          , accesService: args.accesService
          , downloadURL: args.downloadURL
          , modified: args.modified
          , issued: args.issued
          , byteSize: parseInt(args.byteSize)
          , mediaType: args.mediaType
          , checksum: parseInt(args.checksum)
          , supportingRole: args.supportingRole
        }
      })
      return newDistribution
    },

    async postKeyword(
      parent: unknown,
      args: {
        keyword: string;
      },
      context: GraphQLContext
    ) {
      const newKeyword = await context.prisma.keyword.create({
        data: {
            keyword: args.keyword
        }
      })
      return newKeyword
    },

    async postLegalfoundation(
      parent: unknown,
      args: {
        legalFoundation: string;
      },
      context: GraphQLContext
    ) {
      const newLegalfoundation = await context.prisma.legalfoundation.create({
        data: {
            legalFoundation: args.legalFoundation
        }
      })
      return newLegalfoundation
    },

    async postOtheridentifier(
      parent: unknown,
      args: {
        otherIdentifier: string;
      },
      context: GraphQLContext
    ) {
      const newOtheridentifier = await context.prisma.otheridentifier.create({
        data: {
            otherIdentifier: args.otherIdentifier
        }
      })
      return newOtheridentifier
    },

    async postQualifiedattribution(
      parent: unknown,
      args: {
        qualifiedAttribution: string;
      },
      context: GraphQLContext
    ) {
      const newQualifiedattribution = await context.prisma.qualifiedattribution.create({
        data: {
            qualifiedAttribution: args.qualifiedAttribution
        }
      })
      return newQualifiedattribution
    },

    async postResourcelanguage(
      parent: unknown,
      args: {
        ResourceLanguage: string;
      },
      context: GraphQLContext
    ) {
      const newResourcelanguage = await context.prisma.resourcelanguage.create({
        data: {
            ResourceLanguage: args.ResourceLanguage
        }
      })
      return newResourcelanguage
    },

    async postRights(
      parent: unknown,
      args: {
        rights: string;
      },
      context: GraphQLContext
    ) {
      const newRights = await context.prisma.rights.create({
        data: {
            rights: args.rights
        }
      })
      return newRights
    },

    async postSpatial(
      parent: unknown,
      args: {
        spatial: string;
      },
      context: GraphQLContext
    ) {
      const newSpatial = await context.prisma.spatial.create({
        data: {
            spatial: args.spatial
        }
      })
      return newSpatial
    },

    async postTheme(
      parent: unknown,
      args: {
        theme: string;
      },
      context: GraphQLContext
    ) {
      const newTheme = await context.prisma.theme.create({
        data: {
            theme: args.theme
        }
      })
      return newTheme
    },

    async postTitle(
      parent: unknown,
      args: {
        title: string;
      },
      context: GraphQLContext
    ) {
      const newTitle = await context.prisma.title.create({
        data: {
            title: args.title
        }
      })
      return newTitle
    },


    async postSpatialOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        spatial: string;
      },
      context: GraphQLContext
    ) {
      const newSpatial = await context.prisma.spatial.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , spatial: args.spatial
        }
      })
      return newSpatial
    },

    async postSpatialOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        spatial: string;
      },
      context: GraphQLContext
    ) {
      const newSpatial = await context.prisma.spatial.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , spatial: args.spatial
        }
      })
      return newSpatial
    },

    async postSpatialOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        spatial: string;
      },
      context: GraphQLContext
    ) {
      const newSpatial = await context.prisma.spatial.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , spatial: args.spatial
        }
      })
      return newSpatial
    },

    async postSpatialOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        spatial: string;
      },
      context: GraphQLContext
    ) {
      const newSpatial = await context.prisma.spatial.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , spatial: args.spatial
        }
      })
      return newSpatial
    },

    async postThemeOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        theme: string;
      },
      context: GraphQLContext
    ) {
      const newTheme = await context.prisma.theme.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , theme: args.theme
        }
      })
      return newTheme
    },

    async postThemeOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        theme: string;
      },
      context: GraphQLContext
    ) {
      const newTheme = await context.prisma.theme.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , theme: args.theme
        }
      })
      return newTheme
    },

    async postThemeOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        theme: string;
      },
      context: GraphQLContext
    ) {
      const newTheme = await context.prisma.theme.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , theme: args.theme
        }
      })
      return newTheme
    },

    async postThemeOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        theme: string;
      },
      context: GraphQLContext
    ) {
      const newTheme = await context.prisma.theme.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , theme: args.theme
        }
      })
      return newTheme
    },

    async postDescriptionOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        description: string;
      },
      context: GraphQLContext
    ) {
      const newDescription = await context.prisma.description.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , description: args.description
        }
      })
      return newDescription
    },

    async postDescriptionOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        description: string;
      },
      context: GraphQLContext
    ) {
      const newDescription = await context.prisma.description.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , description: args.description
        }
      })
      return newDescription
    },

    async postDescriptionOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        description: string;
      },
      context: GraphQLContext
    ) {
      const newDescription = await context.prisma.description.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , description: args.description
        }
      })
      return newDescription
    },

    async postDescriptionOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        description: string;
      },
      context: GraphQLContext
    ) {
      const newDescription = await context.prisma.description.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , description: args.description
        }
      })
      return newDescription
    },

    async postLegalfoundationOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        legalFoundation: string;
      },
      context: GraphQLContext
    ) {
      const newLegalfoundation = await context.prisma.legalfoundation.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , legalFoundation: args.legalFoundation
        }
      })
      return newLegalfoundation
    },

    async postLegalfoundationOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        legalFoundation: string;
      },
      context: GraphQLContext
    ) {
      const newLegalfoundation = await context.prisma.legalfoundation.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , legalFoundation: args.legalFoundation
        }
      })
      return newLegalfoundation
    },

    async postLegalfoundationOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        legalFoundation: string;
      },
      context: GraphQLContext
    ) {
      const newLegalfoundation = await context.prisma.legalfoundation.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , legalFoundation: args.legalFoundation
        }
      })
      return newLegalfoundation
    },

    async postLegalfoundationOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        legalFoundation: string;
      },
      context: GraphQLContext
    ) {
      const newLegalfoundation = await context.prisma.legalfoundation.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , legalFoundation: args.legalFoundation
        }
      })
      return newLegalfoundation
    },

    async postDatasetOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        identifier: string;
        license: string;
        creator: string;
        publisher: string;
        contactPoint: string;
        accessRights: string;
        releaseDate: string;
        update: string;
        landingPage: string;
        frequency: string;
        temporalCoverage: string;
        catalogrecordId: string;
      },
      context: GraphQLContext
    ) {
      const newDataset = await context.prisma.dataset.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , identifier: args.identifier
          , license: args.license
          , creator: args.creator
          , publisher: args.publisher
          , contactPoint: args.contactPoint
          , accessRights: args.accessRights
          , releaseDate: args.releaseDate
          , update: args.update
          , landingPage: args.landingPage
          , frequency: args.frequency
          , temporalCoverage: args.temporalCoverage
          , catalogrecordId: parseInt(args.catalogrecordId)
        }
      })
      return newDataset
    },

    async postDatasetOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        identifier: string;
        license: string;
        creator: string;
        publisher: string;
        contactPoint: string;
        accessRights: string;
        releaseDate: string;
        update: string;
        landingPage: string;
        frequency: string;
        temporalCoverage: string;
        catalogrecordId: string;
      },
      context: GraphQLContext
    ) {
      const newDataset = await context.prisma.dataset.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , identifier: args.identifier
          , license: args.license
          , creator: args.creator
          , publisher: args.publisher
          , contactPoint: args.contactPoint
          , accessRights: args.accessRights
          , releaseDate: args.releaseDate
          , update: args.update
          , landingPage: args.landingPage
          , frequency: args.frequency
          , temporalCoverage: args.temporalCoverage
          , catalogrecordId: parseInt(args.catalogrecordId)
        }
      })
      return newDataset
    },

    async postDataserviceOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        identifier: string;
        license: string;
        creator: string;
        publisher: string;
        contactPoint: string;
        accessRights: string;
        releaseDate: string;
        update: string;
        landingPage: string;
        endpointURL: string;
        endpointDescription: string;
        distributionId: string;
        catalogRecordId: string;
      },
      context: GraphQLContext
    ) {
      const newDataservice = await context.prisma.dataservice.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , identifier: args.identifier
          , license: args.license
          , creator: args.creator
          , publisher: args.publisher
          , contactPoint: args.contactPoint
          , accessRights: args.accessRights
          , releaseDate: args.releaseDate
          , update: args.update
          , landingPage: args.landingPage
          , endpointURL: args.endpointURL
          , endpointDescription: args.endpointDescription
          , distributionId: parseInt(args.distributionId)
          , catalogRecordId: parseInt(args.catalogRecordId)
        }
      })
      return newDataservice
    },

    async postCatalogrecordOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        primaryTopic: string;
        modified: string;
        listingDate: string;
        conformsTo: string;
        sourceMetadata: string;
      },
      context: GraphQLContext
    ) {
      const newCatalogrecord = await context.prisma.catalogrecord.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , primaryTopic: args.primaryTopic
          , modified: args.modified
          , listingDate: args.listingDate
          , conformsTo: args.conformsTo
          , sourceMetadata: args.sourceMetadata
        }
      })
      return newCatalogrecord
    },

    async postDistributionOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        accessURL: string;
        format: string;
        license: string;
        accesService: string;
        downloadURL: string;
        modified: string;
        issued: string;
        byteSize: string;
        mediaType: string;
        checksum: string;
        supportingRole: string;
      },
      context: GraphQLContext
    ) {
      const newDistribution = await context.prisma.distribution.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , accessURL: args.accessURL
          , format: args.format
          , license: args.license
          , accesService: args.accesService
          , downloadURL: args.downloadURL
          , modified: args.modified
          , issued: args.issued
          , byteSize: parseInt(args.byteSize)
          , mediaType: args.mediaType
          , checksum: parseInt(args.checksum)
          , supportingRole: args.supportingRole
        }
      })
      return newDistribution
    },

    async postKeywordOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        keyword: string;
      },
      context: GraphQLContext
    ) {
      const newKeyword = await context.prisma.keyword.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , keyword: args.keyword
        }
      })
      return newKeyword
    },

    async postKeywordOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        keyword: string;
      },
      context: GraphQLContext
    ) {
      const newKeyword = await context.prisma.keyword.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , keyword: args.keyword
        }
      })
      return newKeyword
    },

    async postKeywordOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        keyword: string;
      },
      context: GraphQLContext
    ) {
      const newKeyword = await context.prisma.keyword.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , keyword: args.keyword
        }
      })
      return newKeyword
    },

    async postKeywordOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        keyword: string;
      },
      context: GraphQLContext
    ) {
      const newKeyword = await context.prisma.keyword.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , keyword: args.keyword
        }
      })
      return newKeyword
    },

    async postTitleOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        title: string;
      },
      context: GraphQLContext
    ) {
      const newTitle = await context.prisma.title.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , title: args.title
        }
      })
      return newTitle
    },

    async postTitleOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        title: string;
      },
      context: GraphQLContext
    ) {
      const newTitle = await context.prisma.title.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , title: args.title
        }
      })
      return newTitle
    },

    async postTitleOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        title: string;
      },
      context: GraphQLContext
    ) {
      const newTitle = await context.prisma.title.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , title: args.title
        }
      })
      return newTitle
    },

    async postTitleOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        title: string;
      },
      context: GraphQLContext
    ) {
      const newTitle = await context.prisma.title.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , title: args.title
        }
      })
      return newTitle
    },

    async postConformstoOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        conformTo: string;
      },
      context: GraphQLContext
    ) {
      const newConformsto = await context.prisma.conformsto.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , conformTo: args.conformTo
        }
      })
      return newConformsto
    },

    async postConformstoOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        conformTo: string;
      },
      context: GraphQLContext
    ) {
      const newConformsto = await context.prisma.conformsto.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , conformTo: args.conformTo
        }
      })
      return newConformsto
    },

    async postConformstoOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        conformTo: string;
      },
      context: GraphQLContext
    ) {
      const newConformsto = await context.prisma.conformsto.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , conformTo: args.conformTo
        }
      })
      return newConformsto
    },

    async postQualifiedattributionOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        qualifiedAttribution: string;
      },
      context: GraphQLContext
    ) {
      const newQualifiedattribution = await context.prisma.qualifiedattribution.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , qualifiedAttribution: args.qualifiedAttribution
        }
      })
      return newQualifiedattribution
    },

    async postQualifiedattributionOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        qualifiedAttribution: string;
      },
      context: GraphQLContext
    ) {
      const newQualifiedattribution = await context.prisma.qualifiedattribution.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , qualifiedAttribution: args.qualifiedAttribution
        }
      })
      return newQualifiedattribution
    },

    async postQualifiedattributionOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        qualifiedAttribution: string;
      },
      context: GraphQLContext
    ) {
      const newQualifiedattribution = await context.prisma.qualifiedattribution.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , qualifiedAttribution: args.qualifiedAttribution
        }
      })
      return newQualifiedattribution
    },

    async postQualifiedattributionOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        qualifiedAttribution: string;
      },
      context: GraphQLContext
    ) {
      const newQualifiedattribution = await context.prisma.qualifiedattribution.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , qualifiedAttribution: args.qualifiedAttribution
        }
      })
      return newQualifiedattribution
    },

    async postResourcelanguageOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        ResourceLanguage: string;
      },
      context: GraphQLContext
    ) {
      const newResourcelanguage = await context.prisma.resourcelanguage.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , ResourceLanguage: args.ResourceLanguage
        }
      })
      return newResourcelanguage
    },

    async postResourcelanguageOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        ResourceLanguage: string;
      },
      context: GraphQLContext
    ) {
      const newResourcelanguage = await context.prisma.resourcelanguage.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , ResourceLanguage: args.ResourceLanguage
        }
      })
      return newResourcelanguage
    },

    async postResourcelanguageOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        ResourceLanguage: string;
      },
      context: GraphQLContext
    ) {
      const newResourcelanguage = await context.prisma.resourcelanguage.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , ResourceLanguage: args.ResourceLanguage
        }
      })
      return newResourcelanguage
    },

    async postResourcelanguageOnDescription(
      parent: unknown,
      args: {
        distributionId: string;
        ResourceLanguage: string;
      },
      context: GraphQLContext
    ) {
      const newResourcelanguage = await context.prisma.resourcelanguage.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , ResourceLanguage: args.ResourceLanguage
        }
      })
      return newResourcelanguage
    },

    async postOtheridentifierOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        otherIdentifier: string;
      },
      context: GraphQLContext
    ) {
      const newOtheridentifier = await context.prisma.otheridentifier.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , otherIdentifier: args.otherIdentifier
        }
      })
      return newOtheridentifier
    },

    async postOtheridentifierOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        otherIdentifier: string;
      },
      context: GraphQLContext
    ) {
      const newOtheridentifier = await context.prisma.otheridentifier.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , otherIdentifier: args.otherIdentifier
        }
      })
      return newOtheridentifier
    },

    async postOtheridentifierOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        otherIdentifier: string;
      },
      context: GraphQLContext
    ) {
      const newOtheridentifier = await context.prisma.otheridentifier.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , otherIdentifier: args.otherIdentifier
        }
      })
      return newOtheridentifier
    },

    async postOtheridentifierOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        otherIdentifier: string;
      },
      context: GraphQLContext
    ) {
      const newOtheridentifier = await context.prisma.otheridentifier.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , otherIdentifier: args.otherIdentifier
        }
      })
      return newOtheridentifier
    },

    async postRightsOnCatalog(
      parent: unknown,
      args: {
        catalogId: string;
        rights: string;
      },
      context: GraphQLContext
    ) {
      const newRights = await context.prisma.rights.create({
        data: {
            catalogId: parseInt(args.catalogId)
          , rights: args.rights
        }
      })
      return newRights
    },

    async postRightsOnDataset(
      parent: unknown,
      args: {
        datasetId: string;
        rights: string;
      },
      context: GraphQLContext
    ) {
      const newRights = await context.prisma.rights.create({
        data: {
            datasetId: parseInt(args.datasetId)
          , rights: args.rights
        }
      })
      return newRights
    },

    async postRightsOnDistribution(
      parent: unknown,
      args: {
        distributionId: string;
        rights: string;
      },
      context: GraphQLContext
    ) {
      const newRights = await context.prisma.rights.create({
        data: {
            distributionId: parseInt(args.distributionId)
          , rights: args.rights
        }
      })
      return newRights
    },

    async postRightsOnDataservice(
      parent: unknown,
      args: {
        dataserviceId: string;
        rights: string;
      },
      context: GraphQLContext
    ) {
      const newRights = await context.prisma.rights.create({
        data: {
            dataserviceId: parseInt(args.dataserviceId)
          , rights: args.rights
        }
      })
      return newRights
    },

  },

}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})
