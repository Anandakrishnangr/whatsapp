import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/typedefs", // Path to your schema file
  documents: "./src/graphql/operations/**/*.graphql", // Path to GraphQL queries/mutations
  generates: {
    "../frontend/src/graphql/graphql.ts": {
      plugins: [
        "typescript",               // Generates TypeScript types for the schema
        "typescript-operations",    // Generates types for queries/mutations
        "typescript-react-apollo",  // Generates React Apollo hooks
      ]
    }
  }
};

export default config;
