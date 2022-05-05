import { useState } from "react";
import bugImageURL from '../../images/bug.svg';
import ideaImageURL from '../../images/idea.svg';
import thoughtImageURL from '../../images/thought.svg';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageURL,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageURL,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de um balão de pensamento'
    }
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      { feedbackSent ? (<FeedbackSuccessStep onRestartFeedback={handleRestartFeedback}/>) : (
        <>
        {!feedbackType ? 
      <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      : <FeedbackContentStep 
      feedbackType={feedbackType}
       onRestartFeedback={handleRestartFeedback}
       onFeedbackSent={() => setFeedbackSent(true)}
       />
      }
        </>
      )}
      
      
      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    
    </div>
  )
}