import QRCode from "qrcode";

export interface CardData {
  recipient: string;
  headline: string;
  subtitle: string;
  message: string;
  signature: string;
  footerNote: string;
  targetUrl: string;
  usePlaceholder: boolean;
  showSecretCode: boolean;
  secretCodeHint: string;
}

const CARD_W = 1400;
const CARD_H = 1980;

function drawCornerFlourish(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  sx: number,
  sy: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(sx, sy);
  ctx.strokeStyle = "#B68B4C";
  ctx.lineWidth = 2.2;

  ctx.beginPath();
  ctx.moveTo(0, 56);
  ctx.lineTo(0, 0);
  ctx.lineTo(56, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(16, 16, 8, Math.PI, Math.PI * 1.5);
  ctx.stroke();

  ctx.fillStyle = "#842C3B";
  ctx.beginPath();
  ctx.arc(28, 28, 3.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawFrame(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#FCF8F1";
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  // Subtle warm radial vignette
  const grad = ctx.createRadialGradient(
    CARD_W * 0.5,
    CARD_H * 0.45,
    120,
    CARD_W * 0.5,
    CARD_H * 0.5,
    CARD_W * 0.85,
  );
  grad.addColorStop(0, "rgba(255, 253, 249, 0.7)");
  grad.addColorStop(1, "rgba(232, 221, 204, 0.35)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, CARD_W, CARD_H);

  // Outer brass hairline border
  ctx.strokeStyle = "rgba(182, 139, 76, 0.55)";
  ctx.lineWidth = 2.5;
  ctx.strokeRect(64, 64, CARD_W - 128, CARD_H - 128);

  // Inner fine border
  ctx.strokeStyle = "rgba(182, 139, 76, 0.28)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(86, 86, CARD_W - 172, CARD_H - 172);

  drawCornerFlourish(ctx, 76, 76, 1, 1);
  drawCornerFlourish(ctx, CARD_W - 76, 76, -1, 1);
  drawCornerFlourish(ctx, 76, CARD_H - 76, 1, -1);
  drawCornerFlourish(ctx, CARD_W - 76, CARD_H - 76, -1, -1);
}

function wrapLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const paragraphs = text.split("\n");
  const lines: string[] = [];

  for (const para of paragraphs) {
    const words = para.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      lines.push("");
      continue;
    }
    let current = words[0] ?? "";
    for (let i = 1; i < words.length; i++) {
      const next = `${current} ${words[i]}`;
      if (ctx.measureText(next).width <= maxWidth) {
        current = next;
      } else {
        lines.push(current);
        current = words[i] ?? "";
      }
    }
    lines.push(current);
  }
  return lines;
}

function triggerDownload(canvas: HTMLCanvasElement, filename: string) {
  const url = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function downloadCardSidePng(
  side: "front" | "back",
  data: CardData,
): Promise<void> {
  if (typeof document === "undefined") return;
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const canvas = document.createElement("canvas");
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  drawFrame(ctx);

  if (side === "front") {
    ctx.textAlign = "center";

    // Top kicker
    ctx.fillStyle = "#842C3B";
    ctx.font = '500 24px "Manrope", sans-serif';
    ctx.fillText("POUR TOI  ·  ÉDITION PRIVÉE", CARD_W / 2, 240);

    // Central crest circle & star
    ctx.strokeStyle = "rgba(182, 139, 76, 0.6)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(CARD_W / 2, 560, 128, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(132, 44, 59, 0.35)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(CARD_W / 2, 560, 104, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#842C3B";
    ctx.font = '400 76px "Cormorant Garamond", Georgia, serif';
    ctx.fillText("♥", CARD_W / 2, 584);

    // Main Headline
    ctx.fillStyle = "#1F1916";
    ctx.font = '400 96px "Cormorant Garamond", Georgia, serif';
    const headlineLines = wrapLines(ctx, data.headline, CARD_W - 300);
    let y = 890;
    for (const line of headlineLines) {
      ctx.fillText(line, CARD_W / 2, y);
      y += 112;
    }

    // Divider
    ctx.strokeStyle = "#B68B4C";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(CARD_W / 2 - 90, y + 20);
    ctx.lineTo(CARD_W / 2 + 90, y + 20);
    ctx.stroke();

    // Subtitle
    ctx.fillStyle = "#5A4D46";
    ctx.font = 'italic 400 44px "Cormorant Garamond", Georgia, serif';
    const subLines = wrapLines(ctx, data.subtitle, CARD_W - 340);
    let sy = y + 100;
    for (const line of subLines) {
      ctx.fillText(line, CARD_W / 2, sy);
      sy += 62;
    }

    // Bottom footer note
    ctx.fillStyle = "#842C3B";
    ctx.font = '500 26px "Manrope", sans-serif';
    ctx.fillText(data.footerNote.toUpperCase(), CARD_W / 2, CARD_H - 180);

    triggerDownload(canvas, "carte-romantique-recto.png");
    return;
  }

  // Back side (love note + QR code)
  ctx.textAlign = "center";
  ctx.fillStyle = "#842C3B";
  ctx.font = 'italic 400 66px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(data.recipient, CARD_W / 2, 260);

  // Message
  ctx.fillStyle = "#1F1916";
  ctx.font = '400 44px "Cormorant Garamond", Georgia, serif';
  const msgLines = wrapLines(ctx, data.message, CARD_W - 300);
  let my = 380;
  for (const line of msgLines.slice(0, 7)) {
    ctx.fillText(line, CARD_W / 2, my);
    my += 66;
  }

  // Signature
  ctx.fillStyle = "#842C3B";
  ctx.font = 'italic 500 46px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(data.signature, CARD_W / 2, Math.max(my + 45, 760));

  // Botanical hairline divider
  const divY = Math.max(my + 130, 860);
  ctx.strokeStyle = "rgba(182, 139, 76, 0.5)";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(260, divY);
  ctx.lineTo(CARD_W - 260, divY);
  ctx.stroke();

  // QR Medallion box
  const qrBoxSize = 440;
  const qrX = (CARD_W - qrBoxSize) / 2;
  const qrY = divY + 85;

  ctx.strokeStyle = "#B68B4C";
  ctx.lineWidth = 2.5;
  ctx.strokeRect(qrX - 24, qrY - 24, qrBoxSize + 48, qrBoxSize + 48);

  const hasValidUrl = !data.usePlaceholder && data.targetUrl.trim().length > 0;
  if (hasValidUrl) {
    const qrDataUrl = await QRCode.toDataURL(data.targetUrl.trim(), {
      width: qrBoxSize,
      margin: 2,
      errorCorrectionLevel: "M",
      color: { dark: "#1F1916", light: "#FCF8F1" },
    });
    const img = new Image();
    img.src = qrDataUrl;
    await new Promise<void>((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });
    ctx.drawImage(img, qrX, qrY, qrBoxSize, qrBoxSize);
  } else {
    ctx.save();
    ctx.setLineDash([10, 10]);
    ctx.strokeStyle = "rgba(132, 44, 59, 0.45)";
    ctx.lineWidth = 2;
    ctx.strokeRect(qrX + 12, qrY + 12, qrBoxSize - 24, qrBoxSize - 24);
    ctx.restore();

    ctx.fillStyle = "#5A4D46";
    ctx.font = '500 28px "Manrope", sans-serif';
    ctx.fillText("EMPLACEMENT QR CODE", CARD_W / 2, qrY + qrBoxSize / 2 - 12);
    ctx.font = 'italic 400 34px "Cormorant Garamond", Georgia, serif';
    ctx.fillText(
      "À intégrer avec le lien définitif",
      CARD_W / 2,
      qrY + qrBoxSize / 2 + 34,
    );
  }

  // Scan invitation
  const labelY = qrY + qrBoxSize + 100;
  ctx.fillStyle = "#1F1916";
  ctx.font = '500 28px "Manrope", sans-serif';
  ctx.fillText("SCANNE POUR DÉCOUVRIR TA SURPRISE", CARD_W / 2, labelY);

  if (data.showSecretCode && data.secretCodeHint.trim()) {
    ctx.fillStyle = "#842C3B";
    ctx.font = '500 24px "Manrope", sans-serif';
    ctx.fillText(
      `Code d’accès : ${data.secretCodeHint.trim()}`,
      CARD_W / 2,
      labelY + 52,
    );
  }

  triggerDownload(canvas, "carte-romantique-verso.png");
}
