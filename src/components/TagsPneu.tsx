interface TagsProps {
  text: string;
  bckColor: string;
  colorText: string;
}

export default function TagsPneu({ text }: { text?: string }) {
  // Mapping des couleurs en fonction du texte
  const colorMapping: Record<string, TagsProps> = {
    été: {
      text: "été",
      bckColor: "#FFE2A4",
      colorText: "#5E4000",
    },
    hiver: {
      text: "hiver",
      bckColor: "#A4D3FF",
      colorText: "#00325B",
    },
    toutes_saisons: {
      text: "toutes saisons",
      bckColor: "#A4FFB4",
      colorText: "#006613",
    },
    Default: {
      text: "undefined",
      bckColor: "#B4A4FF",
      colorText: "#130066",
    },
  };

  // Récupération des couleurs en fonction du texte ou valeurs par défaut
  const { bckColor, colorText } =
    text && colorMapping[text.toLowerCase()]
      ? colorMapping[text.toLowerCase()]
      : colorMapping.Default;

  return (
    <p
      className={`rounded-lg py-1 px-2 uppercase font-bold text-xs w-fit`}
      style={{ backgroundColor: bckColor, color: colorText }}
    >
      {text ? colorMapping[text.toLowerCase()]?.text || text : "Default"}
    </p>
  );
}
