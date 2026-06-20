const { app } = require("@azure/functions");
const { BlobServiceClient } = require("@azure/storage-blob");

app.http("saveOrder", {
    methods: ["POST"],
    authLevel: "anonymous",

    handler: async (request, context) => {

        try {

            const order = await request.json();

            const connectionString = process.env.STORAGE_CONNECTION_STRING;

            context.log("Connection String Exists:", !!connectionString);

if (!connectionString) {
    return {
        status: 500,
        jsonBody: {
            success: false,
            error: "STORAGE_CONNECTION_STRING not found"
        }
    };
}

            const blobServiceClient =
                BlobServiceClient.fromConnectionString(connectionString);

            const containerClient =
                blobServiceClient.getContainerClient("orders");

            const blobName = `order-${Date.now()}.json`;

            const blockBlobClient =
                containerClient.getBlockBlobClient(blobName);

            const data = JSON.stringify(order, null, 2);

            await blockBlobClient.upload(
                data,
                Buffer.byteLength(data)
            );

            return {
                status: 200,
                jsonBody: {
                    success: true,
                    message: "Order saved successfully",
                    file: blobName
                }
            };

        } catch (err) {

            context.error(err);

            return {
                status: 500,
                jsonBody: {
                    success: false,
                    error: err.message
                }
            };

        }

    }
});