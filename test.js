import fetch from "node-fetch";

const WEBHOOK_URL = "https://discord.com/api/webhooks/1435232146326425621/BK5JHPYnZUiGZ8PKaVeecL8yg3JW9JrrWX2pgcwcBDeAp13s8O_TUbmP4-kScP76nyee";

async function sendButton() {
  const body = {
    content: "🎀 Ciel Dashboard Test",
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 5,
            label: "✨ Join Server ✨",
            url: "https://www.minecraft.net/"
          }
        ]
      }
    ]
  };

  const res = await fetch(`${WEBHOOK_URL}?wait=true`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  console.log(await res.text());
}

sendButton();
