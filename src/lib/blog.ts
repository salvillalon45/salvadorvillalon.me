import fs from 'fs'
import path from 'path'

interface Metadata {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
}

export function fetchBlogs() {
    const blogs = [
        {
            publishedAt: '2018',
            title: 'How to build a web application using Flask and deploy it to the cloud',
            link: 'https://www.freecodecamp.org/news/how-to-build-a-web-application-using-flask-and-deploy-it-to-the-cloud-3551c985e492',
            slug: ''
        },
        {
            publishedAt: '2023',
            title: 'How Sal Got in Tech',
            link: '',
            slug: 'how-sal-got-in-tech'
        },
        {
            publishedAt: '2024',
            title: 'What are Pre-Rendering and Hydration in Web Development? A Deep Dive for Devs',
            link: "https://www.freecodecamp.org/news/what-are-pre-rendering-and-hydration-in-web-dev/",
            slug: ''
        },
    ];

    return blogs;
}

export function fetchMedia() {
    const media = [
        {
            publishedAt: '2019',
            title: 'UCI Chapter for Hispanic Engineers Earns National Recognition',
            link: "https://engineering.uci.edu/news/2019/11/uci-chapter-hispanic-engineers-earns-national-recognition",
            slug: ''
        },
    ];

    return media;
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    const match = frontmatterRegex.exec(fileContent)
    const frontMatterBlock = match![1]
    const content = fileContent.replace(frontmatterRegex, '').trim()
    const frontMatterLines = frontMatterBlock?.trim().split('\n')
    const metadata: Partial<Metadata> = {}

    frontMatterLines?.forEach((line) => {
        const [key, ...valueArr] = line.split(': ')
        let value = valueArr.join(': ').trim()
        value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
        metadata[key?.trim() as keyof Metadata] = value
    })

    return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: fs.PathLike) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
    const rawContent = fs.readFileSync(filePath, 'utf-8')
    return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir)

    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file))
        const slug = path.basename(file, path.extname(file))

        return {
            metadata,
            slug,
            content,
        }
    })
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'src', 'app', 'blog', 'posts'))
}

export function formatDate(date: string, includeRelative = false) {
    const currentDate = new Date()
    if (!date.includes('T')) {
        date = `${date}T00:00:00`
    }
    const targetDate = new Date(date)

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    const daysAgo = currentDate.getDate() - targetDate.getDate()

    let formattedDate = ''

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`
    } else {
        formattedDate = 'Today'
    }

    const fullDate = targetDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    if (!includeRelative) {
        return fullDate
    }

    return `${fullDate} (${formattedDate})`
}
