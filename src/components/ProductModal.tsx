import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function ProductModal({ isOpen, onClose, productName }: ProductModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg" data-testid="modal-product-unavailable">
        <DialogHeader>
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-500" />
          </div>
          <DialogTitle className="text-center text-2xl" data-testid="text-modal-title">
            Coming Soon
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2" data-testid="text-modal-description">
            {productName} is currently in development and will be available soon. We're working hard to bring you the best experience possible.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button onClick={onClose} size="lg" className="px-8" data-testid="button-modal-close">
            Got it
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
