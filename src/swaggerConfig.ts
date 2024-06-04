import { SwaggerDefinition, Options } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Restaurant DSR API',
        version: '1.0.0',
        description: 'API documentation for Restaurant DSR',
    },
    servers: [
        {
            url: 'http://localhost:5000/api',
            description: 'Development server',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};

const options: Options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts', './src/dtos/*.ts'],
};

export default options;
