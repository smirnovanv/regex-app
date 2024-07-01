const Abbr = {
    CSS: `Cascading Style Sheets`,
    HTML: `Hyper Text Markup Language`,
    JS: `JavaScript`
  };

const abbrRegex = /(\.)?\b(css|html|js)\b/gi;
  
export const insertAbbr = (str: string) => {
    return str.replace(abbrRegex, (s, $1, $2) => {
        if (!$1) {
            const shortName = $2.toUpperCase();   
            return `<abbr title="${Abbr[shortName]}">${shortName}</abbr>`;
        }

        return $1 + $2;
    }).trim();
  };