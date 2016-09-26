export default class Utilities {
    public static getQueryStringValuefromString(source,sVar) {
        return decodeURIComponent(source.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    public static getFileLink(path:string,wopiUrl:string) {
        var ext = path.substr((path.lastIndexOf('.') + 1));
        var isOffice = Utilities.isOfficeFile(ext);
        var link;

        if (!isOffice) {
            link = path;
        }
        else {
            var urlPath;
            if (wopiUrl) {
                link = ext.toLowerCase() != "pdf" ? wopiUrl.replace("action=interactivepreview", "action=view") : wopiUrl;
            }
            else {
                link = path;
            }

        }

        return link;

    }

    private static isOfficeFile(ext) {
        switch (ext.toLowerCase()) {
            case ("one"):
            case ("xlsx"):
            case ("docx"):
            case ("pptx"):
            case ("pdf"):
                return true;
            default:
                return false;
        }

    }

    private static getLocalDateFormat(formatOption:string) {
        var format = Utilities.getCurrentCultureDateFormat(formatOption);
        return "{0:" + format + "}";
    }

    private static  getCurrentCultureDateFormat(formatOption: string) {
        var k: any = kendo;
        var dateFormat;
        var dateTimeFormat;

        if (k.cultures.current.name.toLowerCase() !== "en-us") {
            dateFormat = k.cultures.current.calendars.standard.patterns.d;
            dateTimeFormat =  k.cultures.current.calendars.standard.patterns.g;
        }
        else {
            dateFormat = "MM/dd/yyyy";
            dateTimeFormat = "MM/dd/yyyy hh:mm tt";
        }

        if (formatOption.toUpperCase() == "D") {
            return dateFormat;
        }
        else
            return dateTimeFormat;

    }

    private static  getLocalDecimalFormat(formatOption: string) {
        var n = new Number(formatOption);
        if (n) {
            return "{0:n" + formatOption + "}";
        }
        else
            return formatOption;
    }

    private static getDocIcon(ext) {

                switch (ext.toLowerCase()) {
                    case ("asp"): return "ichtm.gif"
                    case ("aspx"): return "ichtm.gif"
                    case ("bmp"): return "icbmp.gif"
                    case ("cat"): return "iccat.gif"
                    case ("chm"): return "icchm.gif"
                    case ("config"): return "icconfig.gif"
                    case ("css"): return "iccss.gif"
                    case ("db"): return "icdb.gif"
                    case ("dib"): return "icdib.gif"
                    case ("disc"): return "icdisc.gif"
                    case ("doc"): return "icdoc.png"
                    case ("docm"): return "icdocm.png"
                    case ("docx"): return "icdocx.png"
                    case ("dot"): return "icdot.png"
                    case ("dotm"): return "icdotm.png"
                    case ("dotx"): return "icdotx.png"
                    case ("dvd"): return "icdvd.gif"
                    case ("dwp"): return "icdwp.gif"
                    case ("dwt"): return "icdwt.gif"
                    case ("eml"): return "iceml.gif"
                    case ("est"): return "icest.gif"
                    case ("fwp"): return "icfwp.gif"
                    case ("gif"): return "icgif.gif"
                    case ("hdp"): return "ichdp.gif"
                    case ("hlp"): return "ichlp.gif"
                    case ("hta"): return "ichta.gif"
                    case ("htm"): return "ichtm.gif"
                    case ("html"): return "ichtm.gif"
                    case ("htt"): return "ichtt.gif"
                    case ("inf"): return "icinf.gif"
                    case ("ini"): return "icini.gif"
                    case ("jfif"): return "icjfif.gif"
                    case ("jpe"): return "icjpe.gif"
                    case ("jpeg"): return "icjpeg.gif"
                    case ("jpg"): return "icjpg.gif"
                    case ("js"): return "icjs.gif"
                    case ("jse"): return "icjse.gif"
                    case ("log"): return "iclog.gif"
                    case ("master"): return "icmaster.gif"
                    case ("mht"): return "icmht.gif"
                    case ("mhtml"): return "icmht.gif"
                    case ("mpd"): return "icmpd.png"
                    case ("mpp"): return "icmpp.png"
                    case ("mps"): return "icmps.gif"
                    case ("mpt"): return "icmpt.png"
                    case ("mpw"): return "icmpw.gif"
                    case ("mpx"): return "icmpx.gif"
                    case ("msg"): return "icmsg.png"
                    case ("msi"): return "icmsi.gif"
                    case ("msp"): return "icmsp.gif"
                    case ("ocx"): return "icocx.gif"
                    case ("odc"): return "icodc.gif"
                    case ("odp"): return "icodp.png"
                    case ("odt"): return "icodt.png"
                    case ("ods"): return "icods.png"
                    case ("one"): return "icone.png"
                    case ("onepkg"): return "iconp.png"
                    case ("onetoc2"): return "icont.png"
                    case ("pdf"): return "icpdf.png"
                    case ("png"): return "icpng.gif"
                    case ("pot"): return "icpot.png"
                    case ("potm"): return "icpotm.png"
                    case ("potx"): return "icpotx.png"
                    case ("ppa"): return "icppa.png"
                    case ("ppam"): return "icppam.png"
                    case ("ppt"): return "icppt.png"
                    case ("pptm"): return "icpptm.png"
                    case ("pptx"): return "icpptx.png"
                    case ("pps"): return "icpps.png"
                    case ("ppsdc"): return "icppsdc.png"
                    case ("ppsm"): return "icppsm.png"
                    case ("ppsx"): return "icppsx.png"
                    case ("psp"): return "icpsp.gif"
                    case ("psd"): return "icbmp.gif"
                    case ("ptm"): return "icptm.gif"
                    case ("ptt"): return "icptt.gif"
                    case ("pub"): return "icpub.png"
                    case ("rdl"): return "doc_sp16.gif"
                    case ("rsapplication"): return "newreport_sp.gif"
                    case ("rsc"): return "component_sp16.gif"
                    case ("rsd"): return "dataset_sp16.gif"
                    case ("rsds"): return "datasource.gif"
                    case ("rtf"): return "icrtf.gif"
                    case ("smdl"): return "model_sp16.gif"
                    case ("stp"): return "icstp.gif"
                    case ("stt"): return "icstt.gif"
                    case ("thmx"): return "icthmx.gif"
                    case ("tif"): return "ictif.gif"
                    case ("tiff"): return "ictiff.gif"
                    case ("txt"): return "ictxt.gif"
                    case ("vbe"): return "icvbe.gif"
                    case ("vbs"): return "icvbs.gif"
                    case ("vdw"): return "icvdw.gif"
                    case ("vdx"): return "icvdx.gif"
                    case ("vsd"): return "icvsd.gif"
                    case ("vsl"): return "icvsl.gif"
                    case ("vss"): return "icvss.gif"
                    case ("vst"): return "icvst.gif"
                    case ("vsu"): return "icvsu.gif"
                    case ("vsw"): return "icvsw.gif"
                    case ("vsx"): return "icvsx.gif"
                    case ("vtx"): return "icvtx.gif"
                    case ("vsdx"): return "icvsdx.gif"
                    case ("vsdm"): return "icvsdm.gif"
                    case ("vssm"): return "icvssm.gif"
                    case ("vssx"): return "icvssx.gif"
                    case ("vstm"): return "icvstm.gif"
                    case ("vstx"): return "icvstx.gif"
                    case ("wdp"): return "ichdp.gif"
                    case ("webpart"): return "icdwp.gif"
                    case ("wm"): return "icwm.gif"
                    case ("wma"): return "icwma.gif"
                    case ("wmd"): return "icwmd.gif"
                    case ("wmp"): return "icwmp.gif"
                    case ("wms"): return "icwms.gif"
                    case ("wmv"): return "icwmv.gif"
                    case ("wmx"): return "icwmx.gif"
                    case ("wmz"): return "icwmz.gif"
                    case ("wsf"): return "icwsf.gif"
                    case ("xla"): return "icxla.png"
                    case ("xlam"): return "icxlam.png"
                    case ("xls"): return "icxls.png"
                    case ("xlsb"): return "icxlsb.png"
                    case ("xlsm"): return "icxlsm.png"
                    case ("xlsx"): return "icxlsx.png"
                    case ("xlt"): return "icxlt.png"
                    case ("xltb"): return "icxltx.gif"
                    case ("xltm"): return "icxltm.png"
                    case ("xltx"): return "icxltx.png"
                    case ("xml"): return "icxml.gif"
                    case ("xps"): return "icxps.gif"
                    case ("xsd"): return "icxsd.gif"
                    case ("xsl"): return "icxsl.gif"
                    case ("xsn"): return "icxsn.png"
                    case ("xslt"): return "icxslt.gif"
                    case ("zip"): return "iczip.gif"
                    default: return "ichtm.gif"

            }


       }

        public static  getImageIcon(path) {
            var ext = path.substr((path.lastIndexOf('.') + 1));
            var docIcon = "../_layouts/15/images/" + Utilities.getDocIcon(ext);
            return docIcon;
        }

        public static getPreviewLink(data:any,previewLink:string){
           /* var previewTypes = [ "tif", "tiff", "pdf", "docx", "xlsx", "pptx" ];
            var path = data["Path"];
            var fileName = path.substr((path.lastIndexOf('/') + 1));
            var ext = path.substr((path.lastIndexOf('.') + 1));*/
            var link;

            /*Key": "ServerRedirectedPreviewURL",
            "Value": "https://a830edad9050849spdk3067.sharepoint.com/sites/testknowledgelake/_lay….aspx?sourcedoc={d681242a-1fba-4255-835a-a4cda20b9488}&action=imagepreview",*/

            /*if(previewTypes.indexOf(ext.toLowerCase()) > -1 ){
                link = spHostUrl + "/_layouts/15/getpreview.ashx?fname=" + fileName + "&guidFile=" + data["UniqueId"] + "&guidSite=" + data["SiteID"] + "&guidWeb=" + data["WebId"] + "&metadatatoken=300x216x1";
            }
            else{
                link = spAppUrl + "/images/noimage.png?fname=" + fileName;
            }*/

            if(previewLink && previewLink.length > 0){
                link = previewLink;
            }
            else{
                var docIcon = "../_layouts/15/images/" + Utilities.getDocIcon("html");
                link = docIcon;
            }

            return link;

        }
}










