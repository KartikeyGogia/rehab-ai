function chunkMarkdown(markdown){

    const sections = markdown.split(/^## /gm);
    const chunks = sections.map((section) => {
        const lines = section.split("\n");

        const title = lines[0];
        const content = lines.slice(1).join("\n");
        
        return{
        title: title,
        content: content
    };

    });

    return{
        title: title,
        content: content
    };

    console.log(sections);

}

const testMarkdown = `
# Ankle Rehabilitation

## Overview
An ankle sprain is an injury.

## Mobility Exercises
Ankle pumps and ankle circles can help.

## Strengthening
Heel raises can help improve strength.
`;

chunkMarkdown(testMarkdown);