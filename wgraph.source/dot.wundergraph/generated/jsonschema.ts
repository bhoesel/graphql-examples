// Code generated by wunderctl. DO NOT EDIT.

// @ts-ignore: no-types available
import type { JSONSchema7 } from "json-schema";

// @ts-ignore: module unavailable
declare module "json-schema" {
	export interface JSONSchema7 {
		"x-graphql-enum-name"?: string;
	}
}

export interface Queries {
	Catalogs: {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
	"users/get": {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
}

export interface Mutations {
	"users/update": {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
}

export interface Subscriptions {
	"users/subscribe": {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
}

export type Schema = Queries & Mutations & Subscriptions;

const jsonSchema: Schema = {
	Catalogs: {
		input: { type: "object", properties: { filter: { type: ["string", "null"] } }, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						catalogs: {
							type: "array",
							items: {
								type: "object",
								properties: {
									description: {
										type: "array",
										items: {
											type: "object",
											properties: { description: { type: "string" } },
											additionalProperties: false,
											required: ["description"],
										},
									},
									landingPage: { type: "string" },
									identifier: { type: "string" },
									dataservice: {
										type: "array",
										items: {
											type: "object",
											properties: {
												description: {
													type: "array",
													items: {
														type: "object",
														properties: { description: { type: "string" } },
														additionalProperties: false,
														required: ["description"],
													},
												},
												endpointURL: { type: "string" },
												endpointDescription: { type: "string" },
												identifier: { type: "string" },
												title: {
													type: "array",
													items: {
														type: "object",
														properties: { title: { type: "string" } },
														additionalProperties: false,
														required: ["title"],
													},
												},
											},
											additionalProperties: false,
										},
									},
								},
								additionalProperties: false,
							},
						},
					},
					additionalProperties: false,
					required: ["catalogs"],
				},
			},
			additionalProperties: false,
		},
		operationType: "QUERY",
		description: "",
	},
	"users/get": {
		input: {
			type: "object",
			properties: { id: { type: "string" } },
			required: ["id"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: {
			type: "object",
			properties: {
				id: { type: "string" },
				name: { type: "string", default: "Jens" },
				bio: { type: "string", default: "Founder of WunderGraph" },
			},
			required: ["bio", "id", "name"],
		},
		operationType: "QUERY",
		description: "generated/bundle/operations/users/get",
	},
	"users/update": {
		input: {
			type: "object",
			properties: { id: { type: "string" }, name: { type: "string" }, bio: { type: "string" } },
			required: ["id", "name", "bio"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: {
			type: "object",
			properties: { name: { type: "string" }, id: { type: "string" }, bio: { type: "string" } },
			required: ["bio", "id", "name"],
		},
		operationType: "MUTATION",
		description: "generated/bundle/operations/users/update",
	},
	"users/subscribe": {
		input: {
			type: "object",
			properties: { id: { type: "string" } },
			required: ["id"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: {
			type: "object",
			properties: {
				id: { type: "string" },
				name: { type: "string", default: "Jens" },
				bio: { type: "string", default: "Founder of WunderGraph" },
				time: { type: "string" },
			},
			required: ["bio", "id", "name", "time"],
		},
		operationType: "SUBSCRIPTION",
		description: "generated/bundle/operations/users/subscribe",
	},
};

export type QueryNames = "Catalogs" | "users/get";

export type MutationNames = "users/update";

export type SubscriptionNames = "users/subscribe";

export default jsonSchema;