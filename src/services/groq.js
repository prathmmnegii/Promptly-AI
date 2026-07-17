export async function getBotResponse(prompt) {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {

      switch (response.status) {

        case 401:
          return "🔑 Invalid API key. Please check your configuration.";

        case 429:
          return "⚠️ Too many requests. Please wait a moment and try again.";

        case 500:
          return "⚠️ AI service is temporarily unavailable.";

        default:
          return "⚠️ Something went wrong. Please try again.";
      }
    }

    return data.choices[0].message.content;

  } catch (error) {

    console.error(error);

    return "🌐 Unable to connect. Please check your internet connection.";

  }
}