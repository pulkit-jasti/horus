import nltk
nltk.download("stopwords")
nltk.download('punkt')
from math import log
from nltk.tokenize import sent_tokenize
# from nltk.tokenize import PunktWordTokenizer
# tokenizer=PunktWordTokenizer()
from nltk.tokenize import WordPunctTokenizer   
tokenizer = WordPunctTokenizer() 
from nltk.corpus import stopwords
from itertools import islice
import collections
def summary():
    vocab=[]

    def get_count(text):
        counts={}

        for word in text:
            word=word.lower()
            # print(counts)
            if word in counts:
                counts[word]+=1
                continue
            counts[word]=1
            if word not in vocab:
                vocab.append(word)
        return counts

    def get_doc_freq(sentences):
        # vocab_doc_counts
        for_df={}

        for word in vocab:
            for line in sentences:
                if word in line and word in for_df:
                    for_df[word]+=1
                else:
                    for_df[word]=1
        return for_df

    def score_sentences(sentences,tfidf_values):
        tfidf_scores_sentences={}
        # print(tfidf_values)
        for line in sentences:
            tfidf_scores_sentences[line]=0.0
            tokens=tokenizer.tokenize(line)
            for word in tokens:
                word=word.lower()
                if word not in tfidf_values:
                    continue
                tfidf_scores_sentences[line] += tfidf_values[word]
        return tfidf_scores_sentences

    def rank_sentences(score_dict):
        s=sorted(score_dict.items(), key=lambda pair: pair[1],reverse=True)
        sorted_dict = collections.OrderedDict(s)
        return sorted_dict

    def get_summary(paragraph,limit=10):
        # sentences=sent_tokenize(paragraph)
        sentences=paragraph.split(".")
        no_sentences=len(sentences)

        tfidf_scores_sentence={}
        tfidf_values={}
        # sents=[]

        for line in sentences:
            string=""
            tokens=tokenizer.tokenize(line)
            len_sentence=len(tokens)
            tokens=[word.lower() for word in tokens]
            filtered_tokens=[word for word in tokens if word not in stopwords.words('english')]
            counts=get_count(filtered_tokens)
            df=get_doc_freq(filtered_tokens)
    
            for word in filtered_tokens:
                # string+=" "+word
                tf = counts[word]/len_sentence
                idf = log(  (1+no_sentences) / (1 + df[word])    )
                tfidf_values[word] = tf*idf

            # sents.append(string)
        score_dict = score_sentences(sentences,tfidf_values)
        # print(score_dict)
        ranked_sents = rank_sentences(score_dict)  
        # print(no_sentences)
        # print(len(ranked_sents))


        return dict(islice(ranked_sents.items(),limit))

    a=inpu
    tfidf_dict = get_summary(a,limit=2)
    summary=""
    for key in tfidf_dict:
        summary+=""+key
    print(summary)
    # Import the required module for text
# to speech conversion
    from gtts import gTTS

    # This module is imported so that we can
    # play the converted audio
    import os

    # The text that you want to convert to audio
    mytext = summary
    # Language in which you want to convert
    language = 'en'

    # Passing the text and language to the engine,
    # here we have marked slow=False. Which tells
    # the module that the converted audio should
    # have a high speed
    myobj = gTTS(text=mytext, lang=language, slow=False)

    # Saving the converted audio in a mp3 file named
    # welcome
    myobj.save("au.mp3")

    # Playing the converted file
    os.system("au.mp3")

summary()