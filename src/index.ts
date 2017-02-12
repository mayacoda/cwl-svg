import "reflect-metadata";
import "./assets/styles/style.scss";
import {WorkflowFactory} from "cwlts/models";
import {Workflow} from "./graph/workflow";

declare const Snap: any;
Snap.plugin(function (Snap, Element, Paper, glob) {
    const proto = Element.prototype;

    proto.toFront = function () {
        this.appendTo(this.node.parentNode);
    };
    proto.toBack  = function () {
        this.prependTo(this.node.parentNode);
    };
});


const bcbio = {
    "class": "Workflow",
    "cwlVersion": "v1.0",
    "hints": [{
        "class": "DockerRequirement",
        "dockerImageId": "bcbio/bcbio",
        "dockerPull": "bcbio/bcbio"
    }],
    "inputs": [{
        "id": "config__algorithm__align_split_size",
        "type": {"items": "long", "type": "array"}
    }, {
        "id": "config__algorithm__validate",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "reference__fasta__base",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "reference__rtg",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "config__algorithm__variantcaller",
        "type": {"items": {"items": "string", "type": "array"}, "type": "array"}
    }, {
        "id": "config__algorithm__svcaller",
        "type": {"items": {"items": "string", "type": "array"}, "type": "array"}
    }, {
        "id": "genome_resources__rnaseq__transcripts_mask",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "genome_resources__variation__train_1000g",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "config__algorithm__coverage_interval",
        "type": {"items": "null", "type": "array"}
    }, {
        "id": "genome_resources__rnaseq__gene_bed",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "genome_resources__variation__train_hapmap",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "rgnames__lb",
        "type": {"items": "null", "type": "array"}
    }, {
        "id": "genome_resources__variation__dbnsfp",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "rgnames__rg",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__realign",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "metadata__batch",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "rgnames__lane",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__nomap_split_targets",
        "type": {"items": "long", "type": "array"}
    }, {
        "id": "reference__bwa__indexes",
        "type": {"items": ["null", "File"], "type": "array"}
    }, {
        "id": "reference__genome_context",
        "type": {"items": {"items": "File", "type": "array"}, "type": "array"}
    }, {
        "id": "config__algorithm__nomap_split_size",
        "type": {"items": "long", "type": "array"}
    }, {
        "id": "files",
        "type": {"items": {"items": "File", "type": "array"}, "type": "array"}
    }, {
        "id": "genome_resources__srnaseq__srna_transcripts",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__cwl_reporting",
        "type": {"items": ["string", "null"], "type": "array"}
    }, {
        "id": "reference__snpeff__hg19",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "description",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__validate_regions",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "config__algorithm__aligner",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "genome_resources__variation__train_omni",
        "type": {"items": "File", "type": "array"}
    }, {"id": "rgnames__pl", "type": {"items": "string", "type": "array"}}, {
        "id": "genome_build",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "rgnames__pu",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__recalibrate",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "metadata__phenotype",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "genome_resources__rnaseq__transcripts",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "genome_resources__aliases__human",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__tools_off",
        "type": {"items": {"items": "string", "type": "array"}, "type": "array"}
    }, {
        "id": "genome_resources__variation__dbsnp",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "config__algorithm__mark_duplicates",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "genome_resources__variation__ancestral",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "vrn_file",
        "type": {"items": "null", "type": "array"}
    }, {
        "id": "genome_resources__version",
        "type": {"items": "long", "type": "array"}
    }, {
        "id": "genome_resources__variation__cosmic",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "genome_resources__srnaseq__mirbase",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__qc",
        "type": {"items": {"items": "string", "type": "array"}, "type": "array"}
    }, {"id": "analysis", "type": {"items": "string", "type": "array"}}, {
        "id": "rgnames__sample",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__tools_on",
        "type": {"items": {"items": "null", "type": "array"}, "type": "array"}
    }, {
        "id": "config__algorithm__variant_regions",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "genome_resources__aliases__ensembl",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "reference__snap__indexes",
        "type": {"items": ["File", "null"], "type": "array"}
    }, {
        "id": "genome_resources__variation__train_indels",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "genome_resources__aliases__snpeff",
        "type": {"items": "string", "type": "array"}
    }, {
        "id": "config__algorithm__archive",
        "type": {"items": {"items": "null", "type": "array"}, "type": "array"}
    }],
    "outputs": [{
        "id": "align_bam",
        "outputSource": "alignment/align_bam",
        "type": {"items": "File", "type": "array"}
    }, {
        "id": "summary__multiqc",
        "outputSource": "multiqc_summary/summary__multiqc",
        "type": {"items": ["File", "null"], "type": "array"}
    }],
    "requirements": [{
        "class": "EnvVarRequirement",
        "envDef": [{"envName": "MPLCONFIGDIR", "envValue": "."}]
    }, {"class": "ScatterFeatureRequirement"}, {"class": "StepInputExpressionRequirement"}, {"class": "SubworkflowFeatureRequirement"}, {"class": "InlineJavascriptRequirement"}],
    "steps": [{
        "id": "alignment",
        "in": [{"id": "files", "source": "files"}, {
            "id": "config__algorithm__align_split_size",
            "source": "config__algorithm__align_split_size"
        }, {
            "id": "config__algorithm__aligner",
            "source": "config__algorithm__aligner"
        }, {"id": "description", "source": "description"}, {
            "id": "reference__fasta__base",
            "source": "reference__fasta__base"
        }, {"id": "rgnames__pl", "source": "rgnames__pl"}, {
            "id": "rgnames__sample",
            "source": "rgnames__sample"
        }, {"id": "rgnames__pu", "source": "rgnames__pu"}, {
            "id": "rgnames__lane",
            "source": "rgnames__lane"
        }, {"id": "rgnames__rg", "source": "rgnames__rg"}, {
            "id": "rgnames__lb",
            "source": "rgnames__lb"
        }, {
            "id": "reference__bwa__indexes",
            "source": "reference__bwa__indexes"
        }, {
            "id": "reference__snap__indexes",
            "source": "reference__snap__indexes"
        }, {
            "id": "config__algorithm__mark_duplicates",
            "source": "config__algorithm__mark_duplicates"
        }],
        "out": [{"id": "align_bam"}, {"id": "work_bam_plus__disc"}, {"id": "work_bam_plus__sr"}, {"id": "hla__fastq"}],
        "run": {
            "class": "Workflow",
            "cwlVersion": "v1.0",
            "hints": [{
                "class": "DockerRequirement",
                "dockerImageId": "bcbio/bcbio",
                "dockerPull": "bcbio/bcbio"
            }],
            "inputs": [{
                "id": "files",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "config__algorithm__align_split_size",
                "type": "long"
            }, {"id": "config__algorithm__aligner", "type": "string"}, {
                "id": "description",
                "type": "string"
            }, {"id": "reference__fasta__base", "type": "File"}, {
                "id": "rgnames__pl",
                "type": "string"
            }, {"id": "rgnames__sample", "type": "string"}, {
                "id": "rgnames__pu",
                "type": "string"
            }, {"id": "rgnames__lane", "type": "string"}, {
                "id": "rgnames__rg",
                "type": "string"
            }, {"id": "rgnames__lb", "type": "null"}, {
                "id": "reference__bwa__indexes",
                "type": ["null", "File"]
            }, {
                "id": "reference__snap__indexes",
                "type": ["File", "null"]
            }, {"id": "config__algorithm__mark_duplicates", "type": "string"}],
            "outputs": [{
                "id": "align_bam",
                "outputSource": "merge_split_alignments/align_bam",
                "secondaryFiles": [".bai"],
                "type": "File"
            }, {
                "id": "work_bam_plus__disc",
                "outputSource": "merge_split_alignments/work_bam_plus__disc",
                "secondaryFiles": [".bai"],
                "type": ["File", "null"]
            }, {
                "id": "work_bam_plus__sr",
                "outputSource": "merge_split_alignments/work_bam_plus__sr",
                "secondaryFiles": [".bai"],
                "type": ["File", "null"]
            }, {
                "id": "hla__fastq",
                "outputSource": "merge_split_alignments/hla__fastq",
                "type": ["File", "null"]
            }],
            "requirements": [{
                "class": "EnvVarRequirement",
                "envDef": [{"envName": "MPLCONFIGDIR", "envValue": "."}]
            }, {"class": "ScatterFeatureRequirement"}, {"class": "StepInputExpressionRequirement"}, {"class": "SubworkflowFeatureRequirement"}, {"class": "InlineJavascriptRequirement"}],
            "steps": [{
                "id": "prep_align_inputs",
                "in": [{
                    "id": "files",
                    "source": "files"
                }, {
                    "id": "config__algorithm__align_split_size",
                    "source": "config__algorithm__align_split_size"
                }, {
                    "id": "config__algorithm__aligner",
                    "source": "config__algorithm__aligner"
                }, {"id": "description", "source": "description"}],
                "out": [{"id": "files"}, {"id": "config__algorithm__quality_format"}, {"id": "align_split"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "prep_align_inputs", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{
                        "class": "ResourceRequirement",
                        "coresMin": 4,
                        "ramMin": 4096,
                        "tmpdirMin": 4
                    }],
                    "inputs": [{
                        "default": "single-split",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"files\",\"config__algorithm__quality_format\",\"align_split\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "files",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 2,
                            "prefix": "files=",
                            "separate": false
                        },
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "id": "config__algorithm__align_split_size",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 3,
                            "prefix": "config__algorithm__align_split_size=",
                            "separate": false
                        },
                        "type": "long"
                    }, {
                        "id": "config__algorithm__aligner",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 4,
                            "prefix": "config__algorithm__aligner=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "description",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 5,
                            "prefix": "description=",
                            "separate": false
                        },
                        "type": "string"
                    }],
                    "outputs": [{
                        "id": "files",
                        "secondaryFiles": [".gbi"],
                        "type": {"items": {"items": "File", "type": "array"}, "type": "array"}
                    }, {
                        "id": "config__algorithm__quality_format",
                        "type": {"items": "string", "type": "array"}
                    }, {
                        "id": "align_split",
                        "type": {"items": ["string", "null"], "type": "array"}
                    }]
                },
                "sbg:rdfId": "steps/prep_align_inputs.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/prep_align_inputs.cwl"
            }, {
                "id": "process_alignment",
                "in": [{
                    "id": "files",
                    "source": "prep_align_inputs/files"
                }, {
                    "id": "reference__fasta__base",
                    "source": "reference__fasta__base"
                }, {
                    "id": "align_split",
                    "source": "prep_align_inputs/align_split"
                }, {"id": "rgnames__pl", "source": "rgnames__pl"}, {
                    "id": "rgnames__sample",
                    "source": "rgnames__sample"
                }, {"id": "rgnames__pu", "source": "rgnames__pu"}, {
                    "id": "rgnames__lane",
                    "source": "rgnames__lane"
                }, {"id": "rgnames__rg", "source": "rgnames__rg"}, {
                    "id": "rgnames__lb",
                    "source": "rgnames__lb"
                }, {
                    "id": "reference__bwa__indexes",
                    "source": "reference__bwa__indexes"
                }, {
                    "id": "reference__snap__indexes",
                    "source": "reference__snap__indexes"
                }, {
                    "id": "config__algorithm__aligner",
                    "source": "config__algorithm__aligner"
                }, {
                    "id": "config__algorithm__mark_duplicates",
                    "source": "config__algorithm__mark_duplicates"
                }, {
                    "id": "config__algorithm__quality_format",
                    "source": "prep_align_inputs/config__algorithm__quality_format"
                }, {"id": "description", "source": "description"}],
                "out": [{"id": "work_bam"}, {"id": "align_bam"}, {"id": "hla__fastq"}, {"id": "work_bam_plus__disc"}, {"id": "work_bam_plus__sr"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "process_alignment", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{
                        "class": "ResourceRequirement",
                        "coresMin": 4,
                        "ramMin": 4096,
                        "tmpdirMin": 4
                    }],
                    "inputs": [{
                        "default": "single-parallel",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"work_bam\",\"align_bam\",\"hla__fastq\",\"work_bam_plus__disc\",\"work_bam_plus__sr\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "files",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 2,
                            "prefix": "files=",
                            "separate": false
                        },
                        "secondaryFiles": [".gbi"],
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "id": "reference__fasta__base",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 3,
                            "prefix": "reference__fasta__base=",
                            "separate": false
                        },
                        "type": "File"
                    }, {
                        "id": "align_split",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 4,
                            "prefix": "align_split=",
                            "separate": false
                        },
                        "type": ["string", "null"]
                    }, {
                        "id": "rgnames__pl",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 5,
                            "prefix": "rgnames__pl=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "rgnames__sample",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 6,
                            "prefix": "rgnames__sample=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "rgnames__pu",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 7,
                            "prefix": "rgnames__pu=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "rgnames__lane",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 8,
                            "prefix": "rgnames__lane=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "rgnames__rg",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 9,
                            "prefix": "rgnames__rg=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "rgnames__lb",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 10,
                            "prefix": "rgnames__lb=",
                            "separate": false
                        },
                        "type": "null"
                    }, {
                        "id": "reference__bwa__indexes",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 11,
                            "prefix": "reference__bwa__indexes=",
                            "separate": false
                        },
                        "type": ["null", "File"]
                    }, {
                        "id": "reference__snap__indexes",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 12,
                            "prefix": "reference__snap__indexes=",
                            "separate": false
                        },
                        "type": ["File", "null"]
                    }, {
                        "id": "config__algorithm__aligner",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 13,
                            "prefix": "config__algorithm__aligner=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "config__algorithm__mark_duplicates",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 14,
                            "prefix": "config__algorithm__mark_duplicates=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "config__algorithm__quality_format",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 15,
                            "prefix": "config__algorithm__quality_format=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "description",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 16,
                            "prefix": "description=",
                            "separate": false
                        },
                        "type": "string"
                    }],
                    "outputs": [{"id": "work_bam", "type": "File"}, {
                        "id": "align_bam",
                        "type": "File"
                    }, {"id": "hla__fastq", "type": ["File", "null"]}, {
                        "id": "work_bam_plus__disc",
                        "secondaryFiles": [".bai"],
                        "type": ["File", "null"]
                    }, {
                        "id": "work_bam_plus__sr",
                        "secondaryFiles": [".bai"],
                        "type": ["File", "null"]
                    }]
                },
                "scatter": ["files", "align_split", "config__algorithm__quality_format"],
                "scatterMethod": "dotproduct",
                "sbg:rdfId": "steps/process_alignment.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/process_alignment.cwl"
            }, {
                "id": "merge_split_alignments",
                "in": [{
                    "id": "work_bam",
                    "source": "process_alignment/work_bam"
                }, {
                    "id": "align_bam",
                    "source": "process_alignment/align_bam"
                }, {
                    "id": "work_bam_plus__disc",
                    "source": "process_alignment/work_bam_plus__disc"
                }, {
                    "id": "work_bam_plus__sr",
                    "source": "process_alignment/work_bam_plus__sr"
                }, {
                    "id": "hla__fastq",
                    "source": "process_alignment/hla__fastq"
                }, {"id": "description", "source": "description"}],
                "out": [{"id": "align_bam"}, {"id": "work_bam_plus__disc"}, {"id": "work_bam_plus__sr"}, {"id": "hla__fastq"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "merge_split_alignments", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{
                        "class": "ResourceRequirement",
                        "coresMin": 4,
                        "ramMin": 4096,
                        "tmpdirMin": 9
                    }],
                    "inputs": [{
                        "default": "single-merge",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"align_bam\",\"work_bam_plus__disc\",\"work_bam_plus__sr\",\"hla__fastq\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "work_bam",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 2,
                            "prefix": "work_bam=",
                            "separate": false
                        },
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "id": "align_bam",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 3,
                            "prefix": "align_bam=",
                            "separate": false
                        },
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "id": "work_bam_plus__disc",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 4,
                            "prefix": "work_bam_plus__disc=",
                            "separate": false
                        },
                        "secondaryFiles": [".bai"],
                        "type": {"items": ["File", "null"], "type": "array"}
                    }, {
                        "id": "work_bam_plus__sr",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 5,
                            "prefix": "work_bam_plus__sr=",
                            "separate": false
                        },
                        "secondaryFiles": [".bai"],
                        "type": {"items": ["File", "null"], "type": "array"}
                    }, {
                        "id": "hla__fastq",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 6,
                            "prefix": "hla__fastq=",
                            "separate": false
                        },
                        "type": {"items": ["File", "null"], "type": "array"}
                    }, {
                        "id": "description",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 7,
                            "prefix": "description=",
                            "separate": false
                        },
                        "type": "string"
                    }],
                    "outputs": [{
                        "id": "align_bam",
                        "secondaryFiles": [".bai"],
                        "type": "File"
                    }, {
                        "id": "work_bam_plus__disc",
                        "secondaryFiles": [".bai"],
                        "type": ["File", "null"]
                    }, {
                        "id": "work_bam_plus__sr",
                        "secondaryFiles": [".bai"],
                        "type": ["File", "null"]
                    }, {"id": "hla__fastq", "type": ["File", "null"]}]
                },
                "sbg:rdfId": "steps/merge_split_alignments.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/merge_split_alignments.cwl"
            }]
        },
        "scatter": ["files", "config__algorithm__align_split_size", "config__algorithm__aligner", "description", "reference__fasta__base", "rgnames__pl", "rgnames__sample", "rgnames__pu", "rgnames__lane", "rgnames__rg", "rgnames__lb", "reference__bwa__indexes", "reference__snap__indexes", "config__algorithm__mark_duplicates"],
        "scatterMethod": "dotproduct",
        "sbg:rdfId": "wf-alignment.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/wf-alignment.cwl"
    }, {
        "id": "prep_samples",
        "in": [{
            "id": "config__algorithm__variant_regions",
            "source": "config__algorithm__variant_regions"
        }, {
            "id": "reference__fasta__base",
            "source": "reference__fasta__base"
        }, {"id": "description", "source": "description"}],
        "out": [{"id": "config__algorithm__variant_regions"}, {"id": "config__algorithm__variant_regions_merged"}, {"id": "config__algorithm__variant_regions_orig"}, {"id": "config__algorithm__seq2c_bed_ready"}],
        "run": {
            "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
            "baseCommand": ["bcbio_nextgen.py", "runfn", "prep_samples", "cwl"],
            "class": "CommandLineTool",
            "cwlVersion": "v1.0",
            "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
            "inputs": [{
                "default": "multi-parallel",
                "id": "sentinel-parallel",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 0,
                    "prefix": "sentinel-parallel=",
                    "separate": false
                },
                "type": "string"
            }, {
                "default": "[\"config__algorithm__variant_regions\",\"config__algorithm__variant_regions_merged\",\"config__algorithm__variant_regions_orig\",\"config__algorithm__seq2c_bed_ready\"]",
                "id": "sentinel-outputs",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 1,
                    "prefix": "sentinel-outputs=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "config__algorithm__variant_regions",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 2,
                    "prefix": "config__algorithm__variant_regions=",
                    "separate": false
                },
                "type": "File"
            }, {
                "id": "reference__fasta__base",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 3,
                    "prefix": "reference__fasta__base=",
                    "separate": false
                },
                "type": "File"
            }, {
                "id": "description",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 4,
                    "prefix": "description=",
                    "separate": false
                },
                "type": "string"
            }],
            "outputs": [{
                "id": "config__algorithm__variant_regions",
                "type": "File"
            }, {
                "id": "config__algorithm__variant_regions_merged",
                "type": ["File", "null"]
            }, {
                "id": "config__algorithm__variant_regions_orig",
                "type": ["File", "null"]
            }, {"id": "config__algorithm__seq2c_bed_ready", "type": ["File", "null"]}]
        },
        "scatter": ["config__algorithm__variant_regions", "reference__fasta__base", "description"],
        "scatterMethod": "dotproduct",
        "sbg:rdfId": "steps/prep_samples.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/prep_samples.cwl"
    }, {
        "id": "postprocess_alignment",
        "in": [{
            "id": "align_bam",
            "source": "alignment/align_bam"
        }, {
            "id": "config__algorithm__variant_regions",
            "source": "prep_samples/config__algorithm__variant_regions"
        }, {
            "id": "config__algorithm__coverage_interval",
            "source": "config__algorithm__coverage_interval"
        }, {
            "id": "config__algorithm__variant_regions_merged",
            "source": "prep_samples/config__algorithm__variant_regions_merged"
        }, {
            "id": "config__algorithm__variant_regions_orig",
            "source": "prep_samples/config__algorithm__variant_regions_orig"
        }, {
            "id": "config__algorithm__seq2c_bed_ready",
            "source": "prep_samples/config__algorithm__seq2c_bed_ready"
        }, {
            "id": "config__algorithm__recalibrate",
            "source": "config__algorithm__recalibrate"
        }, {
            "id": "reference__fasta__base",
            "source": "reference__fasta__base"
        }, {"id": "description", "source": "description"}],
        "out": [{"id": "config__algorithm__coverage_interval"}, {"id": "config__algorithm__variant_regions"}, {"id": "config__algorithm__variant_regions_merged"}, {"id": "config__algorithm__variant_regions_orig"}, {"id": "config__algorithm__seq2c_bed_ready"}, {"id": "regions__callable"}, {"id": "regions__sample_callable"}, {"id": "regions__nblock"}, {"id": "regions__highdepth"}],
        "run": {
            "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
            "baseCommand": ["bcbio_nextgen.py", "runfn", "postprocess_alignment", "cwl"],
            "class": "CommandLineTool",
            "cwlVersion": "v1.0",
            "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
            "inputs": [{
                "default": "multi-parallel",
                "id": "sentinel-parallel",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 0,
                    "prefix": "sentinel-parallel=",
                    "separate": false
                },
                "type": "string"
            }, {
                "default": "[\"config__algorithm__coverage_interval\",\"config__algorithm__variant_regions\",\"config__algorithm__variant_regions_merged\",\"config__algorithm__variant_regions_orig\",\"config__algorithm__seq2c_bed_ready\",\"regions__callable\",\"regions__sample_callable\",\"regions__nblock\",\"regions__highdepth\"]",
                "id": "sentinel-outputs",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 1,
                    "prefix": "sentinel-outputs=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "align_bam",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 2,
                    "prefix": "align_bam=",
                    "separate": false
                },
                "secondaryFiles": [".bai"],
                "type": "File"
            }, {
                "id": "config__algorithm__variant_regions",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 3,
                    "prefix": "config__algorithm__variant_regions=",
                    "separate": false
                },
                "type": "File"
            }, {
                "id": "config__algorithm__coverage_interval",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 4,
                    "prefix": "config__algorithm__coverage_interval=",
                    "separate": false
                },
                "type": "null"
            }, {
                "id": "config__algorithm__variant_regions_merged",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 5,
                    "prefix": "config__algorithm__variant_regions_merged=",
                    "separate": false
                },
                "type": ["File", "null"]
            }, {
                "id": "config__algorithm__variant_regions_orig",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 6,
                    "prefix": "config__algorithm__variant_regions_orig=",
                    "separate": false
                },
                "type": ["File", "null"]
            }, {
                "id": "config__algorithm__seq2c_bed_ready",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 7,
                    "prefix": "config__algorithm__seq2c_bed_ready=",
                    "separate": false
                },
                "type": ["File", "null"]
            }, {
                "id": "config__algorithm__recalibrate",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 8,
                    "prefix": "config__algorithm__recalibrate=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "reference__fasta__base",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 9,
                    "prefix": "reference__fasta__base=",
                    "separate": false
                },
                "type": "File"
            }, {
                "id": "description",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 10,
                    "prefix": "description=",
                    "separate": false
                },
                "type": "string"
            }],
            "outputs": [{
                "id": "config__algorithm__coverage_interval",
                "type": "string"
            }, {
                "id": "config__algorithm__variant_regions",
                "type": "File"
            }, {
                "id": "config__algorithm__variant_regions_merged",
                "type": ["File", "null"]
            }, {
                "id": "config__algorithm__variant_regions_orig",
                "type": ["File", "null"]
            }, {
                "id": "config__algorithm__seq2c_bed_ready",
                "type": ["File", "null"]
            }, {"id": "regions__callable", "type": "File"}, {
                "id": "regions__sample_callable",
                "type": "File"
            }, {"id": "regions__nblock", "type": "File"}, {
                "id": "regions__highdepth",
                "type": ["File", "null"]
            }]
        },
        "scatter": ["align_bam", "config__algorithm__variant_regions", "config__algorithm__coverage_interval", "config__algorithm__variant_regions_merged", "config__algorithm__variant_regions_orig", "config__algorithm__seq2c_bed_ready", "config__algorithm__recalibrate", "reference__fasta__base", "description"],
        "scatterMethod": "dotproduct",
        "sbg:rdfId": "steps/postprocess_alignment.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/postprocess_alignment.cwl"
    }, {
        "id": "combine_sample_regions",
        "in": [{
            "id": "regions__callable",
            "source": "postprocess_alignment/regions__callable"
        }, {
            "id": "regions__nblock",
            "source": "postprocess_alignment/regions__nblock"
        }, {
            "id": "config__algorithm__nomap_split_size",
            "source": "config__algorithm__nomap_split_size"
        }, {
            "id": "config__algorithm__nomap_split_targets",
            "source": "config__algorithm__nomap_split_targets"
        }, {
            "id": "reference__fasta__base",
            "source": "reference__fasta__base"
        }, {"id": "description", "source": "description"}],
        "out": [{"id": "config__algorithm__callable_regions"}, {"id": "config__algorithm__non_callable_regions"}, {"id": "config__algorithm__callable_count"}],
        "run": {
            "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
            "baseCommand": ["bcbio_nextgen.py", "runfn", "combine_sample_regions", "cwl"],
            "class": "CommandLineTool",
            "cwlVersion": "v1.0",
            "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
            "inputs": [{
                "default": "multi-combined",
                "id": "sentinel-parallel",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 0,
                    "prefix": "sentinel-parallel=",
                    "separate": false
                },
                "type": "string"
            }, {
                "default": "[\"config__algorithm__callable_regions\",\"config__algorithm__non_callable_regions\",\"config__algorithm__callable_count\"]",
                "id": "sentinel-outputs",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 1,
                    "prefix": "sentinel-outputs=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "regions__callable",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 2,
                        "prefix": "regions__callable=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "regions__nblock",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 3,
                        "prefix": "regions__nblock=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "config__algorithm__nomap_split_size",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 4,
                        "prefix": "config__algorithm__nomap_split_size=",
                        "separate": false
                    }, "items": "long", "type": "array"
                }
            }, {
                "id": "config__algorithm__nomap_split_targets",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 5,
                        "prefix": "config__algorithm__nomap_split_targets=",
                        "separate": false
                    }, "items": "long", "type": "array"
                }
            }, {
                "id": "reference__fasta__base",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 6,
                        "prefix": "reference__fasta__base=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "description",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 7,
                        "prefix": "description=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }],
            "outputs": [{
                "id": "config__algorithm__callable_regions",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "config__algorithm__non_callable_regions",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "config__algorithm__callable_count",
                "type": {"items": "int", "type": "array"}
            }]
        },
        "sbg:rdfId": "steps/combine_sample_regions.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/combine_sample_regions.cwl"
    }, {
        "id": "batch_for_variantcall",
        "in": [{"id": "analysis", "source": "analysis"}, {
            "id": "genome_build",
            "source": "genome_build"
        }, {
            "id": "align_bam",
            "source": "alignment/align_bam"
        }, {
            "id": "config__algorithm__callable_regions",
            "source": "combine_sample_regions/config__algorithm__callable_regions"
        }, {"id": "metadata__batch", "source": "metadata__batch"}, {
            "id": "metadata__phenotype",
            "source": "metadata__phenotype"
        }, {
            "id": "regions__callable",
            "source": "postprocess_alignment/regions__callable"
        }, {
            "id": "config__algorithm__variantcaller",
            "source": "config__algorithm__variantcaller"
        }, {
            "id": "config__algorithm__coverage_interval",
            "source": "postprocess_alignment/config__algorithm__coverage_interval"
        }, {
            "id": "config__algorithm__variant_regions",
            "source": "postprocess_alignment/config__algorithm__variant_regions"
        }, {
            "id": "config__algorithm__validate",
            "source": "config__algorithm__validate"
        }, {
            "id": "config__algorithm__validate_regions",
            "source": "config__algorithm__validate_regions"
        }, {
            "id": "config__algorithm__tools_on",
            "source": "config__algorithm__tools_on"
        }, {
            "id": "config__algorithm__tools_off",
            "source": "config__algorithm__tools_off"
        }, {
            "id": "reference__fasta__base",
            "source": "reference__fasta__base"
        }, {"id": "reference__rtg", "source": "reference__rtg"}, {
            "id": "reference__genome_context",
            "source": "reference__genome_context"
        }, {
            "id": "genome_resources__variation__cosmic",
            "source": "genome_resources__variation__cosmic"
        }, {
            "id": "genome_resources__variation__dbsnp",
            "source": "genome_resources__variation__dbsnp"
        }, {"id": "description", "source": "description"}],
        "out": [{"id": "batch_rec"}],
        "run": {
            "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
            "baseCommand": ["bcbio_nextgen.py", "runfn", "batch_for_variantcall", "cwl"],
            "class": "CommandLineTool",
            "cwlVersion": "v1.0",
            "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
            "inputs": [{
                "default": "multi-batch",
                "id": "sentinel-parallel",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 0,
                    "prefix": "sentinel-parallel=",
                    "separate": false
                },
                "type": "string"
            }, {
                "default": "[\"batch_rec\"]",
                "id": "sentinel-outputs",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 1,
                    "prefix": "sentinel-outputs=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "analysis",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 2,
                        "prefix": "analysis=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }, {
                "id": "genome_build",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 3,
                        "prefix": "genome_build=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }, {
                "id": "align_bam",
                "secondaryFiles": [".bai"],
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 4,
                        "prefix": "align_bam=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "config__algorithm__callable_regions",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 5,
                        "prefix": "config__algorithm__callable_regions=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "metadata__batch",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 6,
                        "prefix": "metadata__batch=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }, {
                "id": "metadata__phenotype",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 7,
                        "prefix": "metadata__phenotype=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }, {
                "id": "regions__callable",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 8,
                        "prefix": "regions__callable=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "config__algorithm__variantcaller",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 9,
                        "prefix": "config__algorithm__variantcaller=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "config__algorithm__coverage_interval",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 10,
                        "prefix": "config__algorithm__coverage_interval=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }, {
                "id": "config__algorithm__variant_regions",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 11,
                        "prefix": "config__algorithm__variant_regions=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "config__algorithm__validate",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 12,
                        "prefix": "config__algorithm__validate=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "config__algorithm__validate_regions",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 13,
                        "prefix": "config__algorithm__validate_regions=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "config__algorithm__tools_on",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 14,
                        "prefix": "config__algorithm__tools_on=",
                        "separate": false
                    }, "items": {"items": "null", "type": "array"}, "type": "array"
                }
            }, {
                "id": "config__algorithm__tools_off",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 15,
                        "prefix": "config__algorithm__tools_off=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "reference__fasta__base",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 16,
                        "prefix": "reference__fasta__base=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "reference__rtg",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 17,
                        "prefix": "reference__rtg=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "reference__genome_context",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 18,
                        "prefix": "reference__genome_context=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "genome_resources__variation__cosmic",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 19,
                        "prefix": "genome_resources__variation__cosmic=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "genome_resources__variation__dbsnp",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 20,
                        "prefix": "genome_resources__variation__dbsnp=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "description",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 21,
                        "prefix": "description=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }],
            "outputs": [{
                "id": "batch_rec",
                "type": {
                    "items": {
                        "fields": [{
                            "name": "description",
                            "type": {"items": "string", "type": "array"}
                        }, {
                            "name": "config__algorithm__validate",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "reference__fasta__base",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "reference__rtg",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "config__algorithm__variantcaller",
                            "type": {"items": "string", "type": "array"}
                        }, {
                            "name": "config__algorithm__coverage_interval",
                            "type": {"items": "string", "type": "array"}
                        }, {
                            "name": "metadata__batch",
                            "type": {"items": "string", "type": "array"}
                        }, {
                            "name": "reference__genome_context",
                            "type": {"items": {"items": "File", "type": "array"}, "type": "array"}
                        }, {
                            "name": "config__algorithm__validate_regions",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "genome_build",
                            "type": {"items": "string", "type": "array"}
                        }, {
                            "name": "metadata__phenotype",
                            "type": {"items": "string", "type": "array"}
                        }, {
                            "name": "config__algorithm__tools_off",
                            "type": {"items": {"items": "string", "type": "array"}, "type": "array"}
                        }, {
                            "name": "genome_resources__variation__dbsnp",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "genome_resources__variation__cosmic",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "analysis",
                            "type": {"items": "string", "type": "array"}
                        }, {
                            "name": "config__algorithm__tools_on",
                            "type": {"items": {"items": "null", "type": "array"}, "type": "array"}
                        }, {
                            "name": "config__algorithm__variant_regions",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "align_bam",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "regions__callable",
                            "type": {"items": "File", "type": "array"}
                        }, {
                            "name": "config__algorithm__callable_regions",
                            "type": {"items": "File", "type": "array"}
                        }], "name": "batch_rec", "type": "record"
                    }, "type": "array"
                }
            }]
        },
        "sbg:rdfId": "steps/batch_for_variantcall.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/batch_for_variantcall.cwl"
    }, {
        "id": "variantcall",
        "in": [{
            "id": "description",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['description'])"
        }, {
            "id": "config__algorithm__validate",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['config__algorithm__validate'])"
        }, {
            "id": "reference__fasta__base",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['reference__fasta__base'])"
        }, {
            "id": "reference__rtg",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['reference__rtg'])"
        }, {
            "id": "config__algorithm__variantcaller",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['config__algorithm__variantcaller'])"
        }, {
            "id": "config__algorithm__coverage_interval",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['config__algorithm__coverage_interval'])"
        }, {
            "id": "metadata__batch",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['metadata__batch'])"
        }, {
            "id": "reference__genome_context",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['reference__genome_context'])"
        }, {
            "id": "config__algorithm__validate_regions",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['config__algorithm__validate_regions'])"
        }, {
            "id": "genome_build",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['genome_build'])"
        }, {
            "id": "metadata__phenotype",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['metadata__phenotype'])"
        }, {
            "id": "config__algorithm__tools_off",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['config__algorithm__tools_off'])"
        }, {
            "id": "genome_resources__variation__dbsnp",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['genome_resources__variation__dbsnp'])"
        }, {
            "id": "genome_resources__variation__cosmic",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['genome_resources__variation__cosmic'])"
        }, {
            "id": "analysis",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['analysis'])"
        }, {
            "id": "config__algorithm__tools_on",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['config__algorithm__tools_on'])"
        }, {
            "id": "config__algorithm__variant_regions",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['config__algorithm__variant_regions'])"
        }, {
            "id": "align_bam",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['align_bam'])"
        }, {
            "id": "regions__callable",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['regions__callable'])"
        }, {
            "id": "config__algorithm__callable_regions",
            "source": "batch_for_variantcall/batch_rec",
            "valueFrom": "$(self['config__algorithm__callable_regions'])"
        }],
        "out": [{"id": "vc_rec"}, {"id": "validate__tp"}, {"id": "validate__fp"}, {"id": "validate__fn"}],
        "run": {
            "class": "Workflow",
            "cwlVersion": "v1.0",
            "hints": [{
                "class": "DockerRequirement",
                "dockerImageId": "bcbio/bcbio",
                "dockerPull": "bcbio/bcbio"
            }],
            "inputs": [{
                "id": "description",
                "type": {"items": "string", "type": "array"}
            }, {
                "id": "config__algorithm__validate",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "reference__fasta__base",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "reference__rtg",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "config__algorithm__variantcaller",
                "type": {"items": "string", "type": "array"}
            }, {
                "id": "config__algorithm__coverage_interval",
                "type": {"items": "string", "type": "array"}
            }, {
                "id": "metadata__batch",
                "type": {"items": "string", "type": "array"}
            }, {
                "id": "reference__genome_context",
                "type": {"items": {"items": "File", "type": "array"}, "type": "array"}
            }, {
                "id": "config__algorithm__validate_regions",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "genome_build",
                "type": {"items": "string", "type": "array"}
            }, {
                "id": "metadata__phenotype",
                "type": {"items": "string", "type": "array"}
            }, {
                "id": "config__algorithm__tools_off",
                "type": {"items": {"items": "string", "type": "array"}, "type": "array"}
            }, {
                "id": "genome_resources__variation__dbsnp",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "genome_resources__variation__cosmic",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "analysis",
                "type": {"items": "string", "type": "array"}
            }, {
                "id": "config__algorithm__tools_on",
                "type": {"items": {"items": "null", "type": "array"}, "type": "array"}
            }, {
                "id": "config__algorithm__variant_regions",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "align_bam",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "regions__callable",
                "type": {"items": "File", "type": "array"}
            }, {
                "id": "config__algorithm__callable_regions",
                "type": {"items": "File", "type": "array"}
            }],
            "outputs": [{
                "id": "vc_rec",
                "outputSource": "vc_output_record/vc_rec",
                "type": {
                    "fields": [{
                        "name": "description",
                        "type": {"items": "string", "type": "array"}
                    }, {
                        "name": "vrn_file",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "config__algorithm__validate",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "reference__fasta__base",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "reference__rtg",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "config__algorithm__variantcaller",
                        "type": {"items": "string", "type": "array"}
                    }, {
                        "name": "config__algorithm__coverage_interval",
                        "type": {"items": "string", "type": "array"}
                    }, {
                        "name": "metadata__batch",
                        "type": {"items": "string", "type": "array"}
                    }, {
                        "name": "reference__genome_context",
                        "type": {"items": {"items": "File", "type": "array"}, "type": "array"}
                    }, {
                        "name": "config__algorithm__validate_regions",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "genome_build",
                        "type": {"items": "string", "type": "array"}
                    }, {
                        "name": "metadata__phenotype",
                        "type": {"items": "string", "type": "array"}
                    }, {
                        "name": "config__algorithm__tools_off",
                        "type": {"items": {"items": "string", "type": "array"}, "type": "array"}
                    }, {
                        "name": "genome_resources__variation__dbsnp",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "genome_resources__variation__cosmic",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "analysis",
                        "type": {"items": "string", "type": "array"}
                    }, {
                        "name": "config__algorithm__tools_on",
                        "type": {"items": {"items": "null", "type": "array"}, "type": "array"}
                    }, {
                        "name": "config__algorithm__variant_regions",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "align_bam",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "regions__callable",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "config__algorithm__callable_regions",
                        "type": {"items": "File", "type": "array"}
                    }, {
                        "name": "validate__summary",
                        "type": {"items": ["File", "null"], "type": "array"}
                    }, {
                        "name": "validate__tp",
                        "type": {"items": ["File", "null"], "type": "array"}
                    }, {
                        "name": "validate__fp",
                        "type": {"items": ["File", "null"], "type": "array"}
                    }, {
                        "name": "validate__fn",
                        "type": {"items": ["File", "null"], "type": "array"}
                    }], "name": "vc_rec", "type": "record"
                }
            }, {
                "id": "validate__tp",
                "outputSource": "compare_to_rm/validate__tp",
                "secondaryFiles": [".tbi"],
                "type": ["File", "null"]
            }, {
                "id": "validate__fp",
                "outputSource": "compare_to_rm/validate__fp",
                "secondaryFiles": [".tbi"],
                "type": ["File", "null"]
            }, {
                "id": "validate__fn",
                "outputSource": "compare_to_rm/validate__fn",
                "secondaryFiles": [".tbi"],
                "type": ["File", "null"]
            }],
            "requirements": [{
                "class": "EnvVarRequirement",
                "envDef": [{"envName": "MPLCONFIGDIR", "envValue": "."}]
            }, {"class": "ScatterFeatureRequirement"}, {"class": "StepInputExpressionRequirement"}, {"class": "SubworkflowFeatureRequirement"}, {"class": "InlineJavascriptRequirement"}],
            "steps": [{
                "id": "get_parallel_regions",
                "in": [{
                    "id": "description",
                    "source": "description"
                }, {
                    "id": "config__algorithm__validate",
                    "source": "config__algorithm__validate"
                }, {
                    "id": "reference__fasta__base",
                    "source": "reference__fasta__base"
                }, {
                    "id": "reference__rtg",
                    "source": "reference__rtg"
                }, {
                    "id": "config__algorithm__variantcaller",
                    "source": "config__algorithm__variantcaller"
                }, {
                    "id": "config__algorithm__coverage_interval",
                    "source": "config__algorithm__coverage_interval"
                }, {
                    "id": "metadata__batch",
                    "source": "metadata__batch"
                }, {
                    "id": "reference__genome_context",
                    "source": "reference__genome_context"
                }, {
                    "id": "config__algorithm__validate_regions",
                    "source": "config__algorithm__validate_regions"
                }, {"id": "genome_build", "source": "genome_build"}, {
                    "id": "metadata__phenotype",
                    "source": "metadata__phenotype"
                }, {
                    "id": "config__algorithm__tools_off",
                    "source": "config__algorithm__tools_off"
                }, {
                    "id": "genome_resources__variation__dbsnp",
                    "source": "genome_resources__variation__dbsnp"
                }, {
                    "id": "genome_resources__variation__cosmic",
                    "source": "genome_resources__variation__cosmic"
                }, {"id": "analysis", "source": "analysis"}, {
                    "id": "config__algorithm__tools_on",
                    "source": "config__algorithm__tools_on"
                }, {
                    "id": "config__algorithm__variant_regions",
                    "source": "config__algorithm__variant_regions"
                }, {"id": "align_bam", "source": "align_bam"}, {
                    "id": "regions__callable",
                    "source": "regions__callable"
                }, {
                    "id": "config__algorithm__callable_regions",
                    "source": "config__algorithm__callable_regions"
                }],
                "out": [{"id": "region"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "get_parallel_regions", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
                    "inputs": [{
                        "default": "batch-split",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"region\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "description",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 2,
                                "prefix": "description=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 3,
                                "prefix": "config__algorithm__validate=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__fasta__base",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 4,
                                "prefix": "reference__fasta__base=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__rtg",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 5,
                                "prefix": "reference__rtg=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variantcaller",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 6,
                                "prefix": "config__algorithm__variantcaller=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__coverage_interval",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 7,
                                "prefix": "config__algorithm__coverage_interval=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__batch",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 8,
                                "prefix": "metadata__batch=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "reference__genome_context",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 9,
                                "prefix": "reference__genome_context=",
                                "separate": false
                            }, "items": {"items": "File", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 10,
                                "prefix": "config__algorithm__validate_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_build",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 11,
                                "prefix": "genome_build=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__phenotype",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 12,
                                "prefix": "metadata__phenotype=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_off",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 13,
                                "prefix": "config__algorithm__tools_off=",
                                "separate": false
                            }, "items": {"items": "string", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__dbsnp",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 14,
                                "prefix": "genome_resources__variation__dbsnp=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__cosmic",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 15,
                                "prefix": "genome_resources__variation__cosmic=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "analysis",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 16,
                                "prefix": "analysis=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_on",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 17,
                                "prefix": "config__algorithm__tools_on=",
                                "separate": false
                            }, "items": {"items": "null", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variant_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 18,
                                "prefix": "config__algorithm__variant_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "align_bam",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 19,
                                "prefix": "align_bam=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "regions__callable",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 20,
                                "prefix": "regions__callable=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__callable_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 21,
                                "prefix": "config__algorithm__callable_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }],
                    "outputs": [{"id": "region", "type": {"items": "string", "type": "array"}}]
                },
                "sbg:rdfId": "steps/get_parallel_regions.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/get_parallel_regions.cwl"
            }, {
                "id": "variantcall_batch_region",
                "in": [{
                    "id": "description",
                    "source": "description"
                }, {
                    "id": "config__algorithm__validate",
                    "source": "config__algorithm__validate"
                }, {
                    "id": "reference__fasta__base",
                    "source": "reference__fasta__base"
                }, {
                    "id": "reference__rtg",
                    "source": "reference__rtg"
                }, {
                    "id": "config__algorithm__variantcaller",
                    "source": "config__algorithm__variantcaller"
                }, {
                    "id": "config__algorithm__coverage_interval",
                    "source": "config__algorithm__coverage_interval"
                }, {
                    "id": "metadata__batch",
                    "source": "metadata__batch"
                }, {
                    "id": "reference__genome_context",
                    "source": "reference__genome_context"
                }, {
                    "id": "config__algorithm__validate_regions",
                    "source": "config__algorithm__validate_regions"
                }, {"id": "genome_build", "source": "genome_build"}, {
                    "id": "metadata__phenotype",
                    "source": "metadata__phenotype"
                }, {
                    "id": "config__algorithm__tools_off",
                    "source": "config__algorithm__tools_off"
                }, {
                    "id": "genome_resources__variation__dbsnp",
                    "source": "genome_resources__variation__dbsnp"
                }, {
                    "id": "genome_resources__variation__cosmic",
                    "source": "genome_resources__variation__cosmic"
                }, {"id": "analysis", "source": "analysis"}, {
                    "id": "config__algorithm__tools_on",
                    "source": "config__algorithm__tools_on"
                }, {
                    "id": "config__algorithm__variant_regions",
                    "source": "config__algorithm__variant_regions"
                }, {"id": "align_bam", "source": "align_bam"}, {
                    "id": "regions__callable",
                    "source": "regions__callable"
                }, {
                    "id": "config__algorithm__callable_regions",
                    "source": "config__algorithm__callable_regions"
                }, {"id": "region", "source": "get_parallel_regions/region"}],
                "out": [{"id": "vrn_file_region"}, {"id": "region"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "variantcall_batch_region", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
                    "inputs": [{
                        "default": "batch-parallel",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"vrn_file_region\",\"region\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "description",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 2,
                                "prefix": "description=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 3,
                                "prefix": "config__algorithm__validate=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__fasta__base",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 4,
                                "prefix": "reference__fasta__base=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__rtg",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 5,
                                "prefix": "reference__rtg=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variantcaller",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 6,
                                "prefix": "config__algorithm__variantcaller=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__coverage_interval",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 7,
                                "prefix": "config__algorithm__coverage_interval=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__batch",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 8,
                                "prefix": "metadata__batch=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "reference__genome_context",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 9,
                                "prefix": "reference__genome_context=",
                                "separate": false
                            }, "items": {"items": "File", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 10,
                                "prefix": "config__algorithm__validate_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_build",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 11,
                                "prefix": "genome_build=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__phenotype",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 12,
                                "prefix": "metadata__phenotype=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_off",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 13,
                                "prefix": "config__algorithm__tools_off=",
                                "separate": false
                            }, "items": {"items": "string", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__dbsnp",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 14,
                                "prefix": "genome_resources__variation__dbsnp=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__cosmic",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 15,
                                "prefix": "genome_resources__variation__cosmic=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "analysis",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 16,
                                "prefix": "analysis=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_on",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 17,
                                "prefix": "config__algorithm__tools_on=",
                                "separate": false
                            }, "items": {"items": "null", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variant_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 18,
                                "prefix": "config__algorithm__variant_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "align_bam",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 19,
                                "prefix": "align_bam=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "regions__callable",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 20,
                                "prefix": "regions__callable=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__callable_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 21,
                                "prefix": "config__algorithm__callable_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "region",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 22,
                            "prefix": "region=",
                            "separate": false
                        },
                        "type": "string"
                    }],
                    "outputs": [{
                        "id": "vrn_file_region",
                        "secondaryFiles": [".tbi"],
                        "type": "File"
                    }, {"id": "region", "type": "string"}]
                },
                "scatter": ["region"],
                "scatterMethod": "dotproduct",
                "sbg:rdfId": "steps/variantcall_batch_region.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/variantcall_batch_region.cwl"
            }, {
                "id": "concat_batch_variantcalls",
                "in": [{
                    "id": "description",
                    "source": "description"
                }, {
                    "id": "config__algorithm__validate",
                    "source": "config__algorithm__validate"
                }, {
                    "id": "reference__fasta__base",
                    "source": "reference__fasta__base"
                }, {
                    "id": "reference__rtg",
                    "source": "reference__rtg"
                }, {
                    "id": "config__algorithm__variantcaller",
                    "source": "config__algorithm__variantcaller"
                }, {
                    "id": "config__algorithm__coverage_interval",
                    "source": "config__algorithm__coverage_interval"
                }, {
                    "id": "metadata__batch",
                    "source": "metadata__batch"
                }, {
                    "id": "reference__genome_context",
                    "source": "reference__genome_context"
                }, {
                    "id": "config__algorithm__validate_regions",
                    "source": "config__algorithm__validate_regions"
                }, {"id": "genome_build", "source": "genome_build"}, {
                    "id": "metadata__phenotype",
                    "source": "metadata__phenotype"
                }, {
                    "id": "config__algorithm__tools_off",
                    "source": "config__algorithm__tools_off"
                }, {
                    "id": "genome_resources__variation__dbsnp",
                    "source": "genome_resources__variation__dbsnp"
                }, {
                    "id": "genome_resources__variation__cosmic",
                    "source": "genome_resources__variation__cosmic"
                }, {"id": "analysis", "source": "analysis"}, {
                    "id": "config__algorithm__tools_on",
                    "source": "config__algorithm__tools_on"
                }, {
                    "id": "config__algorithm__variant_regions",
                    "source": "config__algorithm__variant_regions"
                }, {"id": "align_bam", "source": "align_bam"}, {
                    "id": "regions__callable",
                    "source": "regions__callable"
                }, {
                    "id": "config__algorithm__callable_regions",
                    "source": "config__algorithm__callable_regions"
                }, {
                    "id": "region",
                    "source": "variantcall_batch_region/region"
                }, {"id": "vrn_file_region", "source": "variantcall_batch_region/vrn_file_region"}],
                "out": [{"id": "vrn_file"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "concat_batch_variantcalls", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
                    "inputs": [{
                        "default": "batch-merge",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"vrn_file\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "description",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 2,
                                "prefix": "description=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 3,
                                "prefix": "config__algorithm__validate=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__fasta__base",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 4,
                                "prefix": "reference__fasta__base=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__rtg",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 5,
                                "prefix": "reference__rtg=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variantcaller",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 6,
                                "prefix": "config__algorithm__variantcaller=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__coverage_interval",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 7,
                                "prefix": "config__algorithm__coverage_interval=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__batch",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 8,
                                "prefix": "metadata__batch=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "reference__genome_context",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 9,
                                "prefix": "reference__genome_context=",
                                "separate": false
                            }, "items": {"items": "File", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 10,
                                "prefix": "config__algorithm__validate_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_build",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 11,
                                "prefix": "genome_build=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__phenotype",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 12,
                                "prefix": "metadata__phenotype=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_off",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 13,
                                "prefix": "config__algorithm__tools_off=",
                                "separate": false
                            }, "items": {"items": "string", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__dbsnp",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 14,
                                "prefix": "genome_resources__variation__dbsnp=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__cosmic",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 15,
                                "prefix": "genome_resources__variation__cosmic=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "analysis",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 16,
                                "prefix": "analysis=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_on",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 17,
                                "prefix": "config__algorithm__tools_on=",
                                "separate": false
                            }, "items": {"items": "null", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variant_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 18,
                                "prefix": "config__algorithm__variant_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "align_bam",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 19,
                                "prefix": "align_bam=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "regions__callable",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 20,
                                "prefix": "regions__callable=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__callable_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 21,
                                "prefix": "config__algorithm__callable_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "region",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 22,
                                "prefix": "region=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "vrn_file_region",
                        "secondaryFiles": [".tbi"],
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 23,
                                "prefix": "vrn_file_region=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }],
                    "outputs": [{"id": "vrn_file", "secondaryFiles": [".tbi"], "type": "File"}]
                },
                "sbg:rdfId": "steps/concat_batch_variantcalls.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/concat_batch_variantcalls.cwl"
            }, {
                "id": "postprocess_variants",
                "in": [{
                    "id": "description",
                    "source": "description"
                }, {
                    "id": "config__algorithm__validate",
                    "source": "config__algorithm__validate"
                }, {
                    "id": "reference__fasta__base",
                    "source": "reference__fasta__base"
                }, {
                    "id": "reference__rtg",
                    "source": "reference__rtg"
                }, {
                    "id": "config__algorithm__variantcaller",
                    "source": "config__algorithm__variantcaller"
                }, {
                    "id": "config__algorithm__coverage_interval",
                    "source": "config__algorithm__coverage_interval"
                }, {
                    "id": "metadata__batch",
                    "source": "metadata__batch"
                }, {
                    "id": "reference__genome_context",
                    "source": "reference__genome_context"
                }, {
                    "id": "config__algorithm__validate_regions",
                    "source": "config__algorithm__validate_regions"
                }, {"id": "genome_build", "source": "genome_build"}, {
                    "id": "metadata__phenotype",
                    "source": "metadata__phenotype"
                }, {
                    "id": "config__algorithm__tools_off",
                    "source": "config__algorithm__tools_off"
                }, {
                    "id": "genome_resources__variation__dbsnp",
                    "source": "genome_resources__variation__dbsnp"
                }, {
                    "id": "genome_resources__variation__cosmic",
                    "source": "genome_resources__variation__cosmic"
                }, {"id": "analysis", "source": "analysis"}, {
                    "id": "config__algorithm__tools_on",
                    "source": "config__algorithm__tools_on"
                }, {
                    "id": "config__algorithm__variant_regions",
                    "source": "config__algorithm__variant_regions"
                }, {"id": "align_bam", "source": "align_bam"}, {
                    "id": "regions__callable",
                    "source": "regions__callable"
                }, {
                    "id": "config__algorithm__callable_regions",
                    "source": "config__algorithm__callable_regions"
                }, {"id": "vrn_file", "source": "concat_batch_variantcalls/vrn_file"}],
                "out": [{"id": "vrn_file"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "postprocess_variants", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
                    "inputs": [{
                        "default": "batch-single",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"vrn_file\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "description",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 2,
                                "prefix": "description=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 3,
                                "prefix": "config__algorithm__validate=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__fasta__base",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 4,
                                "prefix": "reference__fasta__base=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__rtg",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 5,
                                "prefix": "reference__rtg=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variantcaller",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 6,
                                "prefix": "config__algorithm__variantcaller=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__coverage_interval",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 7,
                                "prefix": "config__algorithm__coverage_interval=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__batch",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 8,
                                "prefix": "metadata__batch=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "reference__genome_context",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 9,
                                "prefix": "reference__genome_context=",
                                "separate": false
                            }, "items": {"items": "File", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 10,
                                "prefix": "config__algorithm__validate_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_build",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 11,
                                "prefix": "genome_build=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__phenotype",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 12,
                                "prefix": "metadata__phenotype=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_off",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 13,
                                "prefix": "config__algorithm__tools_off=",
                                "separate": false
                            }, "items": {"items": "string", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__dbsnp",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 14,
                                "prefix": "genome_resources__variation__dbsnp=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__cosmic",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 15,
                                "prefix": "genome_resources__variation__cosmic=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "analysis",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 16,
                                "prefix": "analysis=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_on",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 17,
                                "prefix": "config__algorithm__tools_on=",
                                "separate": false
                            }, "items": {"items": "null", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variant_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 18,
                                "prefix": "config__algorithm__variant_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "align_bam",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 19,
                                "prefix": "align_bam=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "regions__callable",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 20,
                                "prefix": "regions__callable=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__callable_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 21,
                                "prefix": "config__algorithm__callable_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "vrn_file",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 22,
                            "prefix": "vrn_file=",
                            "separate": false
                        },
                        "secondaryFiles": [".tbi"],
                        "type": "File"
                    }],
                    "outputs": [{"id": "vrn_file", "secondaryFiles": [".tbi"], "type": "File"}]
                },
                "sbg:rdfId": "steps/postprocess_variants.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/postprocess_variants.cwl"
            }, {
                "id": "compare_to_rm",
                "in": [{
                    "id": "description",
                    "source": "description"
                }, {
                    "id": "config__algorithm__validate",
                    "source": "config__algorithm__validate"
                }, {
                    "id": "reference__fasta__base",
                    "source": "reference__fasta__base"
                }, {
                    "id": "reference__rtg",
                    "source": "reference__rtg"
                }, {
                    "id": "config__algorithm__variantcaller",
                    "source": "config__algorithm__variantcaller"
                }, {
                    "id": "config__algorithm__coverage_interval",
                    "source": "config__algorithm__coverage_interval"
                }, {
                    "id": "metadata__batch",
                    "source": "metadata__batch"
                }, {
                    "id": "reference__genome_context",
                    "source": "reference__genome_context"
                }, {
                    "id": "config__algorithm__validate_regions",
                    "source": "config__algorithm__validate_regions"
                }, {"id": "genome_build", "source": "genome_build"}, {
                    "id": "metadata__phenotype",
                    "source": "metadata__phenotype"
                }, {
                    "id": "config__algorithm__tools_off",
                    "source": "config__algorithm__tools_off"
                }, {
                    "id": "genome_resources__variation__dbsnp",
                    "source": "genome_resources__variation__dbsnp"
                }, {
                    "id": "genome_resources__variation__cosmic",
                    "source": "genome_resources__variation__cosmic"
                }, {"id": "analysis", "source": "analysis"}, {
                    "id": "config__algorithm__tools_on",
                    "source": "config__algorithm__tools_on"
                }, {
                    "id": "config__algorithm__variant_regions",
                    "source": "config__algorithm__variant_regions"
                }, {"id": "align_bam", "source": "align_bam"}, {
                    "id": "regions__callable",
                    "source": "regions__callable"
                }, {
                    "id": "config__algorithm__callable_regions",
                    "source": "config__algorithm__callable_regions"
                }, {"id": "vrn_file", "source": "postprocess_variants/vrn_file"}],
                "out": [{"id": "validate__summary"}, {"id": "validate__tp"}, {"id": "validate__fp"}, {"id": "validate__fn"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "compare_to_rm", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
                    "inputs": [{
                        "default": "batch-single",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"validate__summary\",\"validate__tp\",\"validate__fp\",\"validate__fn\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "description",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 2,
                                "prefix": "description=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 3,
                                "prefix": "config__algorithm__validate=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__fasta__base",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 4,
                                "prefix": "reference__fasta__base=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__rtg",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 5,
                                "prefix": "reference__rtg=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variantcaller",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 6,
                                "prefix": "config__algorithm__variantcaller=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__coverage_interval",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 7,
                                "prefix": "config__algorithm__coverage_interval=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__batch",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 8,
                                "prefix": "metadata__batch=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "reference__genome_context",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 9,
                                "prefix": "reference__genome_context=",
                                "separate": false
                            }, "items": {"items": "File", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 10,
                                "prefix": "config__algorithm__validate_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_build",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 11,
                                "prefix": "genome_build=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__phenotype",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 12,
                                "prefix": "metadata__phenotype=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_off",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 13,
                                "prefix": "config__algorithm__tools_off=",
                                "separate": false
                            }, "items": {"items": "string", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__dbsnp",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 14,
                                "prefix": "genome_resources__variation__dbsnp=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__cosmic",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 15,
                                "prefix": "genome_resources__variation__cosmic=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "analysis",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 16,
                                "prefix": "analysis=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_on",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 17,
                                "prefix": "config__algorithm__tools_on=",
                                "separate": false
                            }, "items": {"items": "null", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variant_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 18,
                                "prefix": "config__algorithm__variant_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "align_bam",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 19,
                                "prefix": "align_bam=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "regions__callable",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 20,
                                "prefix": "regions__callable=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__callable_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 21,
                                "prefix": "config__algorithm__callable_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "vrn_file",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 22,
                            "prefix": "vrn_file=",
                            "separate": false
                        },
                        "secondaryFiles": [".tbi"],
                        "type": "File"
                    }],
                    "outputs": [{
                        "id": "validate__summary",
                        "type": ["File", "null"]
                    }, {
                        "id": "validate__tp",
                        "secondaryFiles": [".tbi"],
                        "type": ["File", "null"]
                    }, {
                        "id": "validate__fp",
                        "secondaryFiles": [".tbi"],
                        "type": ["File", "null"]
                    }, {"id": "validate__fn", "secondaryFiles": [".tbi"], "type": ["File", "null"]}]
                },
                "sbg:rdfId": "steps/compare_to_rm.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/compare_to_rm.cwl"
            }, {
                "id": "vc_output_record",
                "in": [{
                    "id": "description",
                    "source": "description"
                }, {
                    "id": "config__algorithm__validate",
                    "source": "config__algorithm__validate"
                }, {
                    "id": "reference__fasta__base",
                    "source": "reference__fasta__base"
                }, {
                    "id": "reference__rtg",
                    "source": "reference__rtg"
                }, {
                    "id": "config__algorithm__variantcaller",
                    "source": "config__algorithm__variantcaller"
                }, {
                    "id": "config__algorithm__coverage_interval",
                    "source": "config__algorithm__coverage_interval"
                }, {
                    "id": "metadata__batch",
                    "source": "metadata__batch"
                }, {
                    "id": "reference__genome_context",
                    "source": "reference__genome_context"
                }, {
                    "id": "config__algorithm__validate_regions",
                    "source": "config__algorithm__validate_regions"
                }, {"id": "genome_build", "source": "genome_build"}, {
                    "id": "metadata__phenotype",
                    "source": "metadata__phenotype"
                }, {
                    "id": "config__algorithm__tools_off",
                    "source": "config__algorithm__tools_off"
                }, {
                    "id": "genome_resources__variation__dbsnp",
                    "source": "genome_resources__variation__dbsnp"
                }, {
                    "id": "genome_resources__variation__cosmic",
                    "source": "genome_resources__variation__cosmic"
                }, {"id": "analysis", "source": "analysis"}, {
                    "id": "config__algorithm__tools_on",
                    "source": "config__algorithm__tools_on"
                }, {
                    "id": "config__algorithm__variant_regions",
                    "source": "config__algorithm__variant_regions"
                }, {"id": "align_bam", "source": "align_bam"}, {
                    "id": "regions__callable",
                    "source": "regions__callable"
                }, {
                    "id": "config__algorithm__callable_regions",
                    "source": "config__algorithm__callable_regions"
                }, {
                    "id": "vrn_file",
                    "source": "postprocess_variants/vrn_file"
                }, {
                    "id": "validate__summary",
                    "source": "compare_to_rm/validate__summary"
                }, {
                    "id": "validate__tp",
                    "source": "compare_to_rm/validate__tp"
                }, {
                    "id": "validate__fp",
                    "source": "compare_to_rm/validate__fp"
                }, {"id": "validate__fn", "source": "compare_to_rm/validate__fn"}],
                "out": [{"id": "vc_rec"}],
                "run": {
                    "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
                    "baseCommand": ["bcbio_nextgen.py", "runfn", "vc_output_record", "cwl"],
                    "class": "CommandLineTool",
                    "cwlVersion": "v1.0",
                    "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
                    "inputs": [{
                        "default": "batch-single",
                        "id": "sentinel-parallel",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 0,
                            "prefix": "sentinel-parallel=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "default": "[\"vc_rec\"]",
                        "id": "sentinel-outputs",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 1,
                            "prefix": "sentinel-outputs=",
                            "separate": false
                        },
                        "type": "string"
                    }, {
                        "id": "description",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 2,
                                "prefix": "description=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 3,
                                "prefix": "config__algorithm__validate=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__fasta__base",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 4,
                                "prefix": "reference__fasta__base=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "reference__rtg",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 5,
                                "prefix": "reference__rtg=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variantcaller",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 6,
                                "prefix": "config__algorithm__variantcaller=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__coverage_interval",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 7,
                                "prefix": "config__algorithm__coverage_interval=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__batch",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 8,
                                "prefix": "metadata__batch=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "reference__genome_context",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 9,
                                "prefix": "reference__genome_context=",
                                "separate": false
                            }, "items": {"items": "File", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__validate_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 10,
                                "prefix": "config__algorithm__validate_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_build",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 11,
                                "prefix": "genome_build=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "metadata__phenotype",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 12,
                                "prefix": "metadata__phenotype=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_off",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 13,
                                "prefix": "config__algorithm__tools_off=",
                                "separate": false
                            }, "items": {"items": "string", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__dbsnp",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 14,
                                "prefix": "genome_resources__variation__dbsnp=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "genome_resources__variation__cosmic",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 15,
                                "prefix": "genome_resources__variation__cosmic=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "analysis",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 16,
                                "prefix": "analysis=",
                                "separate": false
                            }, "items": "string", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__tools_on",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 17,
                                "prefix": "config__algorithm__tools_on=",
                                "separate": false
                            }, "items": {"items": "null", "type": "array"}, "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__variant_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 18,
                                "prefix": "config__algorithm__variant_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "align_bam",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 19,
                                "prefix": "align_bam=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "regions__callable",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 20,
                                "prefix": "regions__callable=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "config__algorithm__callable_regions",
                        "type": {
                            "inputBinding": {
                                "itemSeparator": ";;",
                                "position": 21,
                                "prefix": "config__algorithm__callable_regions=",
                                "separate": false
                            }, "items": "File", "type": "array"
                        }
                    }, {
                        "id": "vrn_file",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 22,
                            "prefix": "vrn_file=",
                            "separate": false
                        },
                        "secondaryFiles": [".tbi"],
                        "type": "File"
                    }, {
                        "id": "validate__summary",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 23,
                            "prefix": "validate__summary=",
                            "separate": false
                        },
                        "type": ["File", "null"]
                    }, {
                        "id": "validate__tp",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 24,
                            "prefix": "validate__tp=",
                            "separate": false
                        },
                        "secondaryFiles": [".tbi"],
                        "type": ["File", "null"]
                    }, {
                        "id": "validate__fp",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 25,
                            "prefix": "validate__fp=",
                            "separate": false
                        },
                        "secondaryFiles": [".tbi"],
                        "type": ["File", "null"]
                    }, {
                        "id": "validate__fn",
                        "inputBinding": {
                            "itemSeparator": ";;",
                            "position": 26,
                            "prefix": "validate__fn=",
                            "separate": false
                        },
                        "secondaryFiles": [".tbi"],
                        "type": ["File", "null"]
                    }],
                    "outputs": [{
                        "id": "vc_rec",
                        "type": {
                            "fields": [{
                                "name": "description",
                                "type": {"items": "string", "type": "array"}
                            }, {
                                "name": "vrn_file",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "config__algorithm__validate",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "reference__fasta__base",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "reference__rtg",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "config__algorithm__variantcaller",
                                "type": {"items": "string", "type": "array"}
                            }, {
                                "name": "config__algorithm__coverage_interval",
                                "type": {"items": "string", "type": "array"}
                            }, {
                                "name": "metadata__batch",
                                "type": {"items": "string", "type": "array"}
                            }, {
                                "name": "reference__genome_context",
                                "type": {
                                    "items": {"items": "File", "type": "array"},
                                    "type": "array"
                                }
                            }, {
                                "name": "config__algorithm__validate_regions",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "genome_build",
                                "type": {"items": "string", "type": "array"}
                            }, {
                                "name": "metadata__phenotype",
                                "type": {"items": "string", "type": "array"}
                            }, {
                                "name": "config__algorithm__tools_off",
                                "type": {
                                    "items": {"items": "string", "type": "array"},
                                    "type": "array"
                                }
                            }, {
                                "name": "genome_resources__variation__dbsnp",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "genome_resources__variation__cosmic",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "analysis",
                                "type": {"items": "string", "type": "array"}
                            }, {
                                "name": "config__algorithm__tools_on",
                                "type": {
                                    "items": {"items": "null", "type": "array"},
                                    "type": "array"
                                }
                            }, {
                                "name": "config__algorithm__variant_regions",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "align_bam",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "regions__callable",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "config__algorithm__callable_regions",
                                "type": {"items": "File", "type": "array"}
                            }, {
                                "name": "validate__summary",
                                "type": {"items": ["File", "null"], "type": "array"}
                            }, {
                                "name": "validate__tp",
                                "type": {"items": ["File", "null"], "type": "array"}
                            }, {
                                "name": "validate__fp",
                                "type": {"items": ["File", "null"], "type": "array"}
                            }, {
                                "name": "validate__fn",
                                "type": {"items": ["File", "null"], "type": "array"}
                            }], "name": "vc_rec", "type": "record"
                        }
                    }]
                },
                "sbg:rdfId": "steps/vc_output_record.cwl",
                "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/vc_output_record.cwl"
            }]
        },
        "scatter": ["description", "config__algorithm__validate", "reference__fasta__base", "reference__rtg", "config__algorithm__variantcaller", "config__algorithm__coverage_interval", "metadata__batch", "reference__genome_context", "config__algorithm__validate_regions", "genome_build", "metadata__phenotype", "config__algorithm__tools_off", "genome_resources__variation__dbsnp", "genome_resources__variation__cosmic", "analysis", "config__algorithm__tools_on", "config__algorithm__variant_regions", "align_bam", "regions__callable", "config__algorithm__callable_regions"],
        "scatterMethod": "dotproduct",
        "sbg:rdfId": "wf-variantcall.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/wf-variantcall.cwl"
    }, {
        "id": "summarize_grading_vc",
        "in": [{
            "id": "description",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['description']; }))"
        }, {
            "id": "vrn_file",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['vrn_file']; }))"
        }, {
            "id": "config__algorithm__validate",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['config__algorithm__validate']; }))"
        }, {
            "id": "reference__fasta__base",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['reference__fasta__base']; }))"
        }, {
            "id": "reference__rtg",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['reference__rtg']; }))"
        }, {
            "id": "config__algorithm__variantcaller",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['config__algorithm__variantcaller']; }))"
        }, {
            "id": "config__algorithm__coverage_interval",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['config__algorithm__coverage_interval']; }))"
        }, {
            "id": "metadata__batch",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['metadata__batch']; }))"
        }, {
            "id": "reference__genome_context",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['reference__genome_context']; }))"
        }, {
            "id": "config__algorithm__validate_regions",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['config__algorithm__validate_regions']; }))"
        }, {
            "id": "genome_build",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['genome_build']; }))"
        }, {
            "id": "metadata__phenotype",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['metadata__phenotype']; }))"
        }, {
            "id": "config__algorithm__tools_off",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['config__algorithm__tools_off']; }))"
        }, {
            "id": "genome_resources__variation__dbsnp",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['genome_resources__variation__dbsnp']; }))"
        }, {
            "id": "genome_resources__variation__cosmic",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['genome_resources__variation__cosmic']; }))"
        }, {
            "id": "analysis",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['analysis']; }))"
        }, {
            "id": "config__algorithm__tools_on",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['config__algorithm__tools_on']; }))"
        }, {
            "id": "config__algorithm__variant_regions",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['config__algorithm__variant_regions']; }))"
        }, {
            "id": "align_bam",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['align_bam']; }))"
        }, {
            "id": "regions__callable",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['regions__callable']; }))"
        }, {
            "id": "config__algorithm__callable_regions",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['config__algorithm__callable_regions']; }))"
        }, {
            "id": "validate__summary",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['validate__summary']; }))"
        }, {
            "id": "validate__tp",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['validate__tp']; }))"
        }, {
            "id": "validate__fp",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['validate__fp']; }))"
        }, {
            "id": "validate__fn",
            "source": "variantcall/vc_rec",
            "valueFrom": "$(self.map(function(x) { return x['validate__fn']; }))"
        }],
        "out": [{"id": "validate__grading_summary"}, {"id": "validate__grading_plots"}],
        "run": {
            "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
            "baseCommand": ["bcbio_nextgen.py", "runfn", "summarize_grading_vc", "cwl"],
            "class": "CommandLineTool",
            "cwlVersion": "v1.0",
            "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
            "inputs": [{
                "default": "multi-combined",
                "id": "sentinel-parallel",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 0,
                    "prefix": "sentinel-parallel=",
                    "separate": false
                },
                "type": "string"
            }, {
                "default": "[\"validate__grading_summary\",\"validate__grading_plots\"]",
                "id": "sentinel-outputs",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 1,
                    "prefix": "sentinel-outputs=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "description",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 2,
                        "prefix": "description=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "vrn_file",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 3,
                        "prefix": "vrn_file=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "config__algorithm__validate",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 4,
                        "prefix": "config__algorithm__validate=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "reference__fasta__base",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 5,
                        "prefix": "reference__fasta__base=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "reference__rtg",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 6,
                        "prefix": "reference__rtg=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "config__algorithm__variantcaller",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 7,
                        "prefix": "config__algorithm__variantcaller=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "config__algorithm__coverage_interval",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 8,
                        "prefix": "config__algorithm__coverage_interval=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "metadata__batch",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 9,
                        "prefix": "metadata__batch=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "reference__genome_context",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 10,
                        "prefix": "reference__genome_context=",
                        "separate": false
                    },
                    "items": {"items": {"items": "File", "type": "array"}, "type": "array"},
                    "type": "array"
                }
            }, {
                "id": "config__algorithm__validate_regions",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 11,
                        "prefix": "config__algorithm__validate_regions=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "genome_build",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 12,
                        "prefix": "genome_build=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "metadata__phenotype",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 13,
                        "prefix": "metadata__phenotype=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "config__algorithm__tools_off",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 14,
                        "prefix": "config__algorithm__tools_off=",
                        "separate": false
                    },
                    "items": {"items": {"items": "string", "type": "array"}, "type": "array"},
                    "type": "array"
                }
            }, {
                "id": "genome_resources__variation__dbsnp",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 15,
                        "prefix": "genome_resources__variation__dbsnp=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "genome_resources__variation__cosmic",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 16,
                        "prefix": "genome_resources__variation__cosmic=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "analysis",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 17,
                        "prefix": "analysis=",
                        "separate": false
                    }, "items": {"items": "string", "type": "array"}, "type": "array"
                }
            }, {
                "id": "config__algorithm__tools_on",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 18,
                        "prefix": "config__algorithm__tools_on=",
                        "separate": false
                    },
                    "items": {"items": {"items": "null", "type": "array"}, "type": "array"},
                    "type": "array"
                }
            }, {
                "id": "config__algorithm__variant_regions",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 19,
                        "prefix": "config__algorithm__variant_regions=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "align_bam",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 20,
                        "prefix": "align_bam=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "regions__callable",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 21,
                        "prefix": "regions__callable=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "config__algorithm__callable_regions",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 22,
                        "prefix": "config__algorithm__callable_regions=",
                        "separate": false
                    }, "items": {"items": "File", "type": "array"}, "type": "array"
                }
            }, {
                "id": "validate__summary",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 23,
                        "prefix": "validate__summary=",
                        "separate": false
                    }, "items": {"items": ["File", "null"], "type": "array"}, "type": "array"
                }
            }, {
                "id": "validate__tp",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 24,
                        "prefix": "validate__tp=",
                        "separate": false
                    }, "items": {"items": ["File", "null"], "type": "array"}, "type": "array"
                }
            }, {
                "id": "validate__fp",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 25,
                        "prefix": "validate__fp=",
                        "separate": false
                    }, "items": {"items": ["File", "null"], "type": "array"}, "type": "array"
                }
            }, {
                "id": "validate__fn",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 26,
                        "prefix": "validate__fn=",
                        "separate": false
                    }, "items": {"items": ["File", "null"], "type": "array"}, "type": "array"
                }
            }],
            "outputs": [{
                "id": "validate__grading_summary",
                "type": {"items": ["File", "null"], "type": "array"}
            }, {
                "id": "validate__grading_plots",
                "type": {"items": {"items": ["File", "null"], "type": "array"}, "type": "array"}
            }]
        },
        "sbg:rdfId": "steps/summarize_grading_vc.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/summarize_grading_vc.cwl"
    }, {
        "id": "pipeline_summary",
        "in": [{"id": "align_bam", "source": "alignment/align_bam"}, {
            "id": "analysis",
            "source": "analysis"
        }, {
            "id": "reference__fasta__base",
            "source": "reference__fasta__base"
        }, {
            "id": "config__algorithm__qc",
            "source": "config__algorithm__qc"
        }, {
            "id": "config__algorithm__variant_regions",
            "source": "postprocess_alignment/config__algorithm__variant_regions"
        }, {"id": "description", "source": "description"}],
        "out": [{"id": "summary__qc__samtools"}, {"id": "summary__qc__fastqc"}, {"id": "coverage__all"}, {"id": "coverage__problems"}],
        "run": {
            "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
            "baseCommand": ["bcbio_nextgen.py", "runfn", "pipeline_summary", "cwl"],
            "class": "CommandLineTool",
            "cwlVersion": "v1.0",
            "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
            "inputs": [{
                "default": "multi-parallel",
                "id": "sentinel-parallel",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 0,
                    "prefix": "sentinel-parallel=",
                    "separate": false
                },
                "type": "string"
            }, {
                "default": "[\"summary__qc__samtools\",\"summary__qc__fastqc\",\"coverage__all\",\"coverage__problems\"]",
                "id": "sentinel-outputs",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 1,
                    "prefix": "sentinel-outputs=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "align_bam",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 2,
                    "prefix": "align_bam=",
                    "separate": false
                },
                "secondaryFiles": [".bai"],
                "type": "File"
            }, {
                "id": "analysis",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 3,
                    "prefix": "analysis=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "reference__fasta__base",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 4,
                    "prefix": "reference__fasta__base=",
                    "separate": false
                },
                "type": "File"
            }, {
                "id": "config__algorithm__qc",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 5,
                    "prefix": "config__algorithm__qc=",
                    "separate": false
                },
                "type": {"items": "string", "type": "array"}
            }, {
                "id": "config__algorithm__variant_regions",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 6,
                    "prefix": "config__algorithm__variant_regions=",
                    "separate": false
                },
                "type": "File"
            }, {
                "id": "description",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 7,
                    "prefix": "description=",
                    "separate": false
                },
                "type": "string"
            }],
            "outputs": [{
                "id": "summary__qc__samtools",
                "type": "File"
            }, {"id": "summary__qc__fastqc", "type": "File"}, {
                "id": "coverage__all",
                "type": ["File", "null"]
            }, {"id": "coverage__problems", "type": ["File", "null"]}]
        },
        "scatter": ["align_bam", "analysis", "reference__fasta__base", "config__algorithm__qc", "config__algorithm__variant_regions", "description"],
        "scatterMethod": "dotproduct",
        "sbg:rdfId": "steps/pipeline_summary.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/pipeline_summary.cwl"
    }, {
        "id": "multiqc_summary",
        "in": [{"id": "genome_build", "source": "genome_build"}, {
            "id": "summary__qc__samtools",
            "source": "pipeline_summary/summary__qc__samtools"
        }, {
            "id": "summary__qc__fastqc",
            "source": "pipeline_summary/summary__qc__fastqc"
        }, {
            "id": "reference__fasta__base",
            "source": "reference__fasta__base"
        }, {
            "id": "config__algorithm__coverage_interval",
            "source": "postprocess_alignment/config__algorithm__coverage_interval"
        }, {"id": "description", "source": "description"}],
        "out": [{"id": "summary__multiqc"}],
        "run": {
            "arguments": [{"position": 0, "valueFrom": "sentinel-runtime=$(runtime)"}],
            "baseCommand": ["bcbio_nextgen.py", "runfn", "multiqc_summary", "cwl"],
            "class": "CommandLineTool",
            "cwlVersion": "v1.0",
            "hints": [{"class": "ResourceRequirement", "coresMin": 4, "ramMin": 4096}],
            "inputs": [{
                "default": "multi-combined",
                "id": "sentinel-parallel",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 0,
                    "prefix": "sentinel-parallel=",
                    "separate": false
                },
                "type": "string"
            }, {
                "default": "[\"summary__multiqc\"]",
                "id": "sentinel-outputs",
                "inputBinding": {
                    "itemSeparator": ";;",
                    "position": 1,
                    "prefix": "sentinel-outputs=",
                    "separate": false
                },
                "type": "string"
            }, {
                "id": "genome_build",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 2,
                        "prefix": "genome_build=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }, {
                "id": "summary__qc__samtools",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 3,
                        "prefix": "summary__qc__samtools=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "summary__qc__fastqc",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 4,
                        "prefix": "summary__qc__fastqc=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "reference__fasta__base",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 5,
                        "prefix": "reference__fasta__base=",
                        "separate": false
                    }, "items": "File", "type": "array"
                }
            }, {
                "id": "config__algorithm__coverage_interval",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 6,
                        "prefix": "config__algorithm__coverage_interval=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }, {
                "id": "description",
                "type": {
                    "inputBinding": {
                        "itemSeparator": ";;",
                        "position": 7,
                        "prefix": "description=",
                        "separate": false
                    }, "items": "string", "type": "array"
                }
            }],
            "outputs": [{
                "id": "summary__multiqc",
                "type": {"items": ["File", "null"], "type": "array"}
            }]
        },
        "sbg:rdfId": "steps/multiqc_summary.cwl",
        "sbg:rdfSource": "https://raw.githubusercontent.com/bcbio/test_bcbio_cwl/master/run_info-cwl-workflow/steps/multiqc_summary.cwl"
    }]
};

const basicWF = {
    "class": "Workflow",
    "cwlVersion": "v1.0",
    "inputs": [
        {
            "id": "inp",
            "type": "File"
        },
        {
            "id": "ex",
            "type": "string"
        }
    ],
    "outputs": [
        {
            "id": "classout",
            "type": "File",
            "outputSource": "compile/classfile"
        }
    ],
    "steps": [
        {
            "run": {
                "cwlVersion": "v1.0",
                "class": "CommandLineTool",
                "baseCommand": [
                    "tar",
                    "xf"
                ],
                "inputs": [
                    {
                        "id": "tarfile",
                        "type": "File",
                        "inputBinding": {
                            "position": 1
                        }
                    },
                    {
                        "id": "extractfile",
                        "type": "string",
                        "inputBinding": {
                            "position": 2
                        }
                    }
                ],
                "outputs": [
                    {
                        "id": "example_out",
                        "type": "File",
                        "outputBinding": {
                            "glob": "$(inputs.extractfile)"
                        }
                    }
                ]
            },
            "id": "untar",
            "in": [
                {
                    "id": "tarfile",
                    "source": "inp"
                },
                {
                    "id": "extractfile",
                    "source": "ex"
                }
            ],
            "out": [
                {
                    "id": "example_out"
                }
            ]
        },
        {
            "run": {
                "cwlVersion": "v1.0",
                "class": "CommandLineTool",
                "label": "Example trivial wrapper for Java 7 compiler",
                "hints": [
                    {
                        "id": "DockerRequirement",
                        "dockerPull": "java:7-jdk"
                    }
                ],
                "baseCommand": "javac",
                "arguments": [
                    "-d",
                    "$(runtime.outdir)"
                ],
                "inputs": [
                    {
                        "id": "src",
                        "type": "File",
                        "inputBinding": {
                            "position": 1
                        }
                    },
                    {
                        "id": "record",
                        "type": {
                            "type": "record",
                            "fields": [
                                {
                                    "name": "field",
                                    "type": "string"
                                }
                            ]
                        }
                    }
                ],
                "outputs": [
                    {
                        "id": "classfile",
                        "type": "File",
                        "outputBinding": {
                            "glob": "*.class"
                        }
                    }
                ]
            },
            "id": "compile",
            "in": [
                {
                    "id": "src",
                    "source": "untar/example_out"
                }
            ],
            "out": [
                {
                    "id": "classfile"
                },
                {
                    "id": "some_file"
                }
            ]
        }
    ]
};


const workflow = new Workflow(new Snap("#svg"));
const wf       = WorkflowFactory.from(bcbio as any);

const connections = wf.connections.filter(c => c.isVisible && (c.source.type === "StepInput" || c.source.type === "StepOutput" ) && (c.destination.type === "StepInput" || c.destination.type === "StepOutput"));
console.log("Connections", connections);

console.log("Model", wf);

console.time("draw");
wf.steps.forEach(s => workflow.command("app.create", s));
workflow.command("workflow.arrange", connections);

connections.forEach(c => workflow.command("connection.create", c));
document.querySelectorAll(".node").forEach(e => new Snap(e).toFront());
// workflow.command("workflow.scale", .5);
console.timeEnd("draw");