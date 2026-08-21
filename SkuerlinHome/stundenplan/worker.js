const BBS2_URL =
    "https://www.bbs2goe.de/data/classes/EFI26A.json";


export default {

    async fetch(request) {

        const url =
            new URL(request.url);


        // ==============================================
        // CORS Preflight
        // ==============================================

        if (
            request.method === "OPTIONS"
        ) {

            return new Response(
                null,
                {
                    status: 204,
                    headers: corsHeaders()
                }
            );

        }


        // ==============================================
        // Nur GET erlauben
        // ==============================================

        if (
            request.method !== "GET"
        ) {

            return new Response(
                JSON.stringify({
                    error:
                        "Nur GET ist erlaubt."
                }),
                {
                    status: 405,
                    headers: {
                        "Content-Type":
                            "application/json; charset=utf-8",

                        ...corsHeaders()
                    }
                }
            );

        }


        // ==============================================
        // Proxy-Endpunkt
        // ==============================================

        if (
            url.pathname !== "/"
        ) {

            return new Response(
                JSON.stringify({
                    error:
                        "Endpoint nicht gefunden."
                }),
                {
                    status: 404,
                    headers: {
                        "Content-Type":
                            "application/json; charset=utf-8",

                        ...corsHeaders()
                    }
                }
            );

        }


        try {

            const response =
                await fetch(
                    BBS2_URL,
                    {
                        cf: {
                            cacheTtl: 60,
                            cacheEverything: true
                        }
                    }
                );


            if (
                !response.ok
            ) {

                return new Response(
                    JSON.stringify({
                        error:
                            "BBS2 konnte nicht abgerufen werden.",

                        status:
                            response.status
                    }),
                    {
                        status: 502,
                        headers: {
                            "Content-Type":
                                "application/json; charset=utf-8",

                            ...corsHeaders()
                        }
                    }
                );

            }


            const data =
                await response.text();


            return new Response(
                data,
                {
                    status: 200,

                    headers: {

                        "Content-Type":
                            "application/json; charset=utf-8",

                        "Cache-Control":
                            "public, max-age=60",

                        ...corsHeaders()

                    }
                }
            );


        } catch (error) {

            return new Response(
                JSON.stringify({

                    error:
                        "Proxy-Fehler",

                    message:
                        error.message

                }),
                {
                    status: 500,

                    headers: {

                        "Content-Type":
                            "application/json; charset=utf-8",

                        ...corsHeaders()

                    }
                }
            );

        }

    }

};


function corsHeaders() {

    return {

        "Access-Control-Allow-Origin":
            "*",

        "Access-Control-Allow-Methods":
            "GET, OPTIONS",

        "Access-Control-Allow-Headers":
            "Content-Type"

    };

}