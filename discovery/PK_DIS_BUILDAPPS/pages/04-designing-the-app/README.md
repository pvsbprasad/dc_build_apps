# Designing the App

1. Let's start with a clean canvas. Click on the element shown in the page and then click on the **x** icon to delete this element.  
   ![](img/81image.png)

2. Drag the container.  
   ![](img/82image.png)

3. Drag the image into the container and set its width to **80px**.  
   ![](img/83image.png)

4. Place the container and text field inside the same parent container, and set the text to **Document Translation**.  
   ![](img/84image.png)

5. Set the text name to **Document Translation**.  
   ![](img/85image.png)

6. Go to the **Layout** tab and set the text alignment to **Center**.  
   ![](img/86image.png)

7. Click on the image inside the container to upload a picture from your local folder and set it as the image.  
   ![](img/87image.png)

8. Click on the parent container, then select **Edit Styles** for the container.  
   ![](img/88image.png)

9. Click on **New Palette**, enter the color code `#099DF1`, and then click **Save**.  
   ![](img/89image.png)

10. On click, set the text size to **fontHeaderSize2**.  
    ![](img/810image.png)

11. Click on **APP variables as strings**.  
    ![](img/811image.png)  
    ![](img/812image.png)

12. Go to the **Integrations** tab and click **Add Integration**.  
    ![](img/813image.png)

13. Click on **BTP destinations**.  
    ![](img/814image.png)

14. Click **Install Integration** as a **REST API**.  
    ![](img/815image.png)

15. Uncheck the checkbox (remove any selection), and set the name as **Language**.  
    ![](img/816image.png)

16. Set the following:  
    - Relative path and query: `/api/v1/languages`  
    - Response mapper: `{records: response.data.languages, driverCode: response.status}`  
    - Run the test  
    - Auto-detect fields from response  
    - Save  
    ![](img/817image.png)

17. Go to the **Variables** tab → select **Data Variables** → click **+** → add **Languages** as a **Collection** → then Save.  
    ![](img/818image.png)